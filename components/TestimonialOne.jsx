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
  {
    id: 7,
    name: "David Lee",
    text: "The personalized treatment plan they created for me was exactly what I needed. I've seen significant improvement.",
    category: "Treatment",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Sarah Johnson",
    text: "I've been to many physio clinics, but this one stands out. The staff is professional and the facilities are top-notch.",
    category: "General",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(testimonials.map((t) => t.category))),
];

export default function TestimonialOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const autoPlayRef = useRef(null);
  const [dragStart, setDragStart] = useState(null);

  const itemsPerPage = isExpanded ? 6 : isMobile ? 1 : isTablet ? 2 : 3;

  const filteredTestimonials = testimonials.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const shouldAutoSlide = filteredTestimonials.length > 6;

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (shouldAutoSlide) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }
  }, [totalPages, shouldAutoSlide]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay, itemsPerPage, selectedCategory]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return filteredTestimonials.slice(start, start + itemsPerPage);
  };

  const handleDragStart = (e) => {
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.clientX || e.changedTouches[0].clientX;
      const diff = dragStart - dragEnd;
      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
      setDragStart(null);
    }
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
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(0);
            }}
            variant={selectedCategory === category ? "filled" : "outlined"}
            color="primary"
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: 400,
        }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} mode="wait" custom={currentPage}>
          <motion.div
            key={currentPage}
            custom={currentPage}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: isExpanded ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                  md: isExpanded ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
                },
                gap: 3,
                mb: 4,
              }}
            >
              {getCurrentTestimonials().map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
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
          mt: 4,
        }}
      >
        {shouldAutoSlide && !isExpanded && (
          <>
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
          </>
        )}

        {filteredTestimonials.length > 6 && (
          <Button
            variant="outlined"
            onClick={() => {
              setIsExpanded(!isExpanded);
              setCurrentPage(0);
            }}
            startIcon={
              isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />
            }
            sx={{ ml: 2 }}
          >
            {isExpanded ? "View Less" : "View More"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
