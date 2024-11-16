"use client";

import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TestimonialCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  minHeight: "200px",
  borderRadius: 16,
  transition: "all 0.3s ease-in-out",
  border: "1px solid #eee",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

const DotIndicator = styled("button")(({ active }) => ({
  width: active ? "24px" : "8px",
  height: "8px",
  borderRadius: "4px",
  backgroundColor: active ? "#2196f3" : "#e0e0e0",
  border: "none",
  margin: "0 4px",
  padding: 0,
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: active ? "#1976d2" : "#bdbdbd",
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    transform: "translateY(-1px)",
  },
  "&.MuiChip-filled": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const testimonials = [
  {
    id: 1,
    name: "Tom Harris",
    text: "From the reception to the treatment room, every aspect of my experience was positive.",
    category: "General",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Lisa Chen",
    text: "I appreciate how they explained everything in detail and involved me in my recovery process.",
    category: "Communication",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "John Doe",
    text: "The physiotherapy treatment I received was excellent. I'm now pain-free and back to my normal activities.",
    category: "Treatment",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Jane Smith",
    text: "I was skeptical at first, but the results speak for themselves. Highly recommended!",
    category: "Results",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Mike Johnson",
    text: "The therapists are knowledgeable and caring. They really listen to your concerns.",
    category: "Staff",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Emily Brown",
    text: "After my sports injury, I thought I'd never play again. Thanks to this clinic, I'm back on the field!",
    category: "Sports Injury",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(testimonials.map((t) => t.category))),
];

export function EnhancedTestimonialCarouselComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const autoPlayRef = useRef(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const dragRef = useRef(null);

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : isExpanded ? 6 : 3;

  const filteredTestimonials = testimonials.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
  }, [totalPages]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay, itemsPerPage, selectedCategory]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      stopAutoPlay();
      setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return filteredTestimonials.slice(start, start + itemsPerPage);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setCurrentPage(0);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    dragRef.current = {
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
    };
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    dragRef.current = null;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    dragRef.current = null;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 2;
    containerRef.current.scrollLeft = dragRef.current.startScrollLeft - walk;
  };

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        maxWidth: "1400px",
        mx: "auto",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          mb: 6,
          p: 4,
          background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
          borderRadius: 2,
          color: "white",
          boxShadow: theme.shadows[4],
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, color: "inherit", fontWeight: 600 }}
        >
          Featured Testimonial
        </Typography>
        <TestimonialCard>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              src={testimonials[0].avatar}
              alt={testimonials[0].name}
              sx={{ mr: 2, width: 48, height: 48 }}
            />
            <Typography variant="h6">{testimonials[0].name}</Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              fontStyle: "italic",
              color: "text.secondary",
              flexGrow: 1,
            }}
          >
            &quot;{testimonials[0].text}&quot;
          </Typography>
          <Box sx={{ mt: 3 }}>
            <FilterChip label={testimonials[0].category} color="primary" />
          </Box>
        </TestimonialCard>
      </Box>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            onClick={() => handleCategoryFilter(category)}
            variant={selectedCategory === category ? "filled" : "outlined"}
            color="primary"
          />
        ))}
      </Box>
      <Box
        ref={containerRef}
        sx={{
          overflow: "hidden",
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence initial={false} custom={currentPage}>
          <motion.div
            key={currentPage}
            custom={currentPage}
            variants={{
              enter: (direction) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction) => ({
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: isExpanded ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
                  md: isExpanded ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
                },
                gap: 3,
                mb: 4,
              }}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  className="bg-white/10 border-white/20 p-4 backdrop-blur-sm"
                  key={`${testimonial.id}-${currentPage}`}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ mr: 2, width: 48, height: 48 }}
                    />
                    <Typography variant="h6">{testimonial.name}</Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      color: "text.secondary",
                      flexGrow: 1,
                    }}
                  >
                    &quot;{testimonial.text}&quot;
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <FilterChip label={testimonial.category} color="primary" />
                  </Box>
                </TestimonialCard>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: 1,
            "&:hover": { backgroundColor: "background.paper" },
          }}
        >
          <ChevronLeft size={24} />
        </IconButton>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <DotIndicator
              key={index}
              active={currentPage === index}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: 1,
            "&:hover": { backgroundColor: "background.paper" },
          }}
        >
          <ChevronRight size={24} />
        </IconButton>

        <Button
          variant="outlined"
          onClick={toggleExpand}
          startIcon={
            isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />
          }
          sx={{ ml: 2 }}
        >
          {isExpanded ? "View Less" : "View More"}
        </Button>
      </Box>
    </Box>
  );
}
