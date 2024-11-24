// "use client";
// import {
//   Avatar,
//   Box,
//   Button,
//   Chip,
//   IconButton,
//   Paper,
//   styled,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   ChevronUp,
//   Star,
// } from "lucide-react";
// import { useCallback, useEffect, useRef, useState } from "react";

// const TestimonialCard = styled(motion(Paper))(({ theme }) => ({
//   padding: theme.spacing(4),
//   height: "100%",
//   minHeight: "200px",
//   borderRadius: 16,
//   transition: "all 0.3s ease-in-out",
//   border: "1px solid #eee",
//   position: "relative",
//   overflow: "hidden",
//   display: "flex",
//   flexDirection: "column",
//   backgroundColor: "white",
//   "&:hover": {
//     transform: "translateY(-4px)",
//     boxShadow: theme.shadows[4],
//   },
// }));

// const FeaturedTestimonialCard = styled(TestimonialCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   // color: theme.palette.primary.contrastText,
//   color: theme.palette.primary.contrastText,
//   "& .MuiChip-root": {
//     backgroundColor: theme.palette.primary.light,
//     color: theme.palette.primary.contrastText,
//   },
// }));

// const DotIndicator = styled("button")(({ active }) => ({
//   width: active ? "24px" : "8px",
//   height: "8px",
//   borderRadius: "4px",
//   backgroundColor: active ? "#2196f3" : "#e0e0e0",
//   border: "none",
//   margin: "0 4px",
//   padding: 0,
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: active ? "#1976d2" : "#bdbdbd",
//   },
// }));

// const FilterChip = styled(Chip)(({ theme }) => ({
//   borderRadius: "8px",
//   transition: "all 0.2s ease",
//   "&:hover": {
//     backgroundColor: theme.palette.primary.light,
//     transform: "translateY(-1px)",
//   },
//   "&.MuiChip-filled": {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     "&:hover": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const testimonials = [
//   {
//     id: 1,
//     name: "Tom Harris",
//     text: "From the reception to the treatment room, every aspect of my experience was positive.",
//     category: "General",
//     avatar: "https://i.ibb.co.com/kyw2y3M/Labour-MP-Tom-Harris.webp",
//     rating: 5,
//   },

//   {
//     id: 2,
//     name: "Lisa Chen",
//     text: "I appreciate how they explained everything in detail and involved me in my recovery process.",
//     category: "Communication",
//     avatar:
//       "https://thumbs.dreamstime.com/b/happy-joyful-little-girl-smiling-hands-near-face-isolated-white-background-60797111.jpg",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     text: "The physiotherapy treatment I received was excellent. I'm now pain-free and back to my normal activities.",
//     category: "Treatment",
//     avatar:
//       "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-640x640.jpg",
//     rating: 4,
//   },
//   {
//     id: 4,
//     name: "Jane Smith",
//     text: "I was skeptical at first, but the results speak for themselves. Highly recommended!",
//     category: "Results",
//     avatar: "https://i.ibb.co.com/q5scnQM/images.jpg",
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "Mike Johnson",
//     text: "The therapists are knowledgeable and caring. They really listen to your concerns.",
//     category: "Staff",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Speaker_Mike_Johnson_Official_Portrait.jpg/640px-Speaker_Mike_Johnson_Official_Portrait.jpg",
//     rating: 4,
//   },
//   {
//     id: 6,
//     name: "Emily Brown",
//     text: "After my sports injury, I thought I'd never play again. Thanks to this clinic, I'm back on the field!",
//     category: "Sports Injury",
//     avatar:
//       "https://static.vecteezy.com/system/resources/previews/028/765/273/non_2x/american-happy-cut-baby-movement-and-child-love-beautiful-background-photo.jpg",
//     rating: 5,
//   },
//   {
//     id: 7,
//     name: "David Lee",
//     text: "The personalized treatment plan they created for me was exactly what I needed. I've seen significant improvement.",
//     category: "Treatment",
//     avatar: "https://vz.cnwimg.com/wp-content/uploads/2023/09/david-lee.jpg",
//     rating: 5,
//   },
//   {
//     id: 8,
//     name: "Sarah Johnson",
//     text: "I've been to many physio clinics, but this one stands out. The staff is professional and the facilities are top-notch.",
//     category: "General",
//     avatar: "https://i.ibb.co.com/G0vT02n/images.jpg",
//     rating: 5,
//   },
// ];

// const categories = [
//   "All",
//   ...Array.from(new Set(testimonials.map((t) => t.category))),
// ];

// const featuredTestimonial = testimonials.find((t) => t.id === 6);

// export default function TestimonialTwo() {
//   const theme = createTheme({
//     components: {
//       MuiChip: {
//         styleOverrides: {
//           root: {
//             "&.MuiChip-filledPrimary": {
//               backgroundColor: "#36ab89", // Primary color
//               color: "#ffffff",
//               borderColor: "#008846",
//             },
//             "&.MuiChip-outlinedPrimary": {
//               backgroundColor: "transparent",
//               color: "#2f4858",
//               borderColor: "#008846",
//             },
//           },
//         },
//       },
//     },
//   });

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const autoPlayRef = useRef(null);
//   const [dragStart, setDragStart] = useState(null);
//   const [lastInteraction, setLastInteraction] = useState(Date.now());

//   const filteredTestimonials = testimonials.filter(
//     (t) => selectedCategory === "All" || t.category === selectedCategory
//   );

//   const itemsPerPage = isExpanded ? 6 : isMobile ? 1 : isTablet ? 2 : 3;
//   const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
//   const shouldAutoSlide = filteredTestimonials.length > itemsPerPage;

//   // Update the animation logic
//   const [slideDirection, setSlideDirection] = useState(1); // 1 for right, -1 for left

//   const startAutoPlay = useCallback(() => {
//     if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     if (shouldAutoSlide) {
//       autoPlayRef.current = setInterval(() => {
//         const now = Date.now();
//         if (now - lastInteraction >= 15000) {
//           setCurrentPage((prev) => (prev + 1) % totalPages);
//         }
//       }, 15000);
//     }
//   }, [totalPages, shouldAutoSlide, lastInteraction]);

//   const stopAutoPlay = useCallback(() => {
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//       autoPlayRef.current = null;
//     }
//   }, []);

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, [
//     startAutoPlay,
//     stopAutoPlay,
//     itemsPerPage,
//     selectedCategory,
//     lastInteraction,
//   ]);

//   const handleNext = useCallback(() => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//     setLastInteraction(Date.now());
//   }, [totalPages]);

//   const handlePrev = useCallback(() => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//     setLastInteraction(Date.now());
//   }, [totalPages]);

//   const getCurrentTestimonials = () => {
//     const start = currentPage * itemsPerPage;
//     return filteredTestimonials.slice(start, start + itemsPerPage);
//   };

//   const handleDragStart = (e) => {
//     setDragStart(e.clientX || e.touches[0].clientX);
//   };

//   // const handleDragEnd = (e) => {
//   //   if (dragStart !== null) {
//   //     const dragEnd = e.clientX || e.changedTouches[0].clientX;
//   //     const diff = dragStart - dragEnd;
//   //     if (Math.abs(diff) > 50) {
//   //       if (diff > 0) {
//   //         handleNext();
//   //       } else {
//   //         handlePrev();
//   //       }
//   //     }
//   //     setDragStart(null);
//   //   }
//   //   setLastInteraction(Date.now());
//   // };

//   const handleDragEnd = (e) => {
//     if (dragStart !== null) {
//       const dragEnd = e.clientX || e.changedTouches[0].clientX;
//       const diff = dragStart - dragEnd;
//       if (Math.abs(diff) > 50) {
//         if (diff > 0) {
//           setSlideDirection(1); // Moving left
//           handleNext();
//         } else {
//           setSlideDirection(-1); // Moving right
//           handlePrev();
//         }
//       }
//       setDragStart(null);
//     }
//     setLastInteraction(Date.now());
//   };

//   const TopAlignedAvatar = styled(Avatar)({
//     objectFit: "cover",
//     objectPosition: "top", // Force object-position to top
//     width: 48,
//     height: 48,
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="select-none">
//         <div className="container mx-auto text-center text-4xl font-bold">
//           <h1>What Our Patients Say</h1>
//         </div>
//         <Box
//           sx={{
//             py: 8,
//             px: 2,
//             maxWidth: "1400px",
//             mx: "auto",
//             // backgroundColor: "background.default",
//             // backgroundColor: "background.default",
//           }}
//         >
//           {featuredTestimonial && (
//             <FeaturedTestimonialCard
//               className=""
//               sx={{ mb: 6, backgroundColor: "#0d9488" }}
//             >
//               <Typography variant="h5" sx={{ mb: 2 }}>
//                 Featured Review
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <Avatar
//                   src={featuredTestimonial.avatar}
//                   alt={featuredTestimonial.name}
//                   sx={{ mr: 2, width: 48, height: 48 }}
//                 />
//                 <Typography variant="h6">{featuredTestimonial.name}</Typography>
//               </Box>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: "1.1rem",
//                   lineHeight: 1.6,
//                   fontStyle: "italic",
//                   flexGrow: 1,
//                   mb: 2,
//                 }}
//               >
//                 &quot;{featuredTestimonial.text}&quot;
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <FilterChip
//                   label={featuredTestimonial.category}
//                   variant={true ? "filled" : "outlined"}
//                   color="primary" // This will apply the custom primary styles
//                 />
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Star
//                       className="text-yellow-500"
//                       key={index}
//                       size={20}
//                       // fill={
//                       //   index < featuredTestimonial.rating ? "#eab308" : "#eab308"
//                       // }
//                       fill="#eab308"
//                       // stroke="#ffffff"
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </FeaturedTestimonialCard>
//           )}

//           <Box
//             sx={{
//               mb: 4,
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 1.5,
//               justifyContent: "center",
//             }}
//           >
//             {categories.map((category) => (
//               <Chip
//                 key={category}
//                 label={category}
//                 onClick={() => {
//                   setSelectedCategory(category);
//                   setCurrentPage(0);
//                   setIsExpanded(false);
//                   setLastInteraction(Date.now());
//                 }}
//                 variant={selectedCategory === category ? "filled" : "outlined"}
//                 color="primary" // This will apply the custom primary styles
//               />
//             ))}
//           </Box>

//           <Box
//             // sx={{
//             //   position: "relative",
//             //   overflow: "hidden",
//             //   // minHeight: 400,
//             // }}
//             // onMouseDown={handleDragStart}
//             // onMouseUp={handleDragEnd}
//             // onTouchStart={handleDragStart}
//             // onTouchEnd={handleDragEnd}
//             sx={{
//               position: "relative",
//               overflow: "hidden",
//             }}
//             onMouseDown={handleDragStart}
//             onMouseUp={handleDragEnd}
//             onTouchStart={handleDragStart}
//             onTouchEnd={handleDragEnd}
//           >
//             <AnimatePresence
//               initial={false}
//               mode="wait"
//               custom={slideDirection}
//             >
//               <motion.div
//                 // key={currentPage}
//                 // custom={currentPage}
//                 // initial={{ opacity: 0, x: 300 }}
//                 // animate={{ opacity: 1, x: 0 }}
//                 // exit={{ opacity: 0, x: -300 }}
//                 // transition={{ duration: 0.3 }}
//                 key={currentPage}
//                 custom={slideDirection}
//                 initial={{ opacity: 0, x: 300 * slideDirection }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -300 * slideDirection }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Box
//                   sx={{
//                     display: "grid",
//                     gridTemplateColumns: {
//                       xs: "1fr",
//                       sm: isExpanded ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
//                       md: isExpanded ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
//                     },
//                     gap: 3,
//                     mb: 4,
//                   }}
//                 >
//                   {getCurrentTestimonials().map((testimonial) => (
//                     <TestimonialCard
//                       key={testimonial.id}
//                       layout
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", mb: 2 }}
//                       >
//                         <Avatar
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           sx={{ mr: 2, width: 48, height: 48 }}
//                           className="top-aligned-avatar"
//                         />
//                         <Typography variant="h6">{testimonial.name}</Typography>
//                       </Box>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           fontSize: "1.1rem",
//                           lineHeight: 1.6,
//                           fontStyle: "italic",
//                           color: "text.secondary",
//                           flexGrow: 1,
//                         }}
//                       >
//                         &quot;{testimonial.text}&quot;
//                       </Typography>
//                     </TestimonialCard>
//                   ))}
//                 </Box>
//               </motion.div>
//             </AnimatePresence>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: 2,
//               flexWrap: "wrap",
//               mt: 4,
//             }}
//           >
//             {shouldAutoSlide && (
//               <>
//                 <IconButton
//                   onClick={handlePrev}
//                   sx={{
//                     backgroundColor: "background.paper",
//                     boxShadow: 1,
//                     "&:hover": { backgroundColor: "background.paper" },
//                   }}
//                 >
//                   <ChevronLeft size={24} />
//                 </IconButton>

//                 <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
//                   {Array.from({ length: totalPages }).map((_, index) => (
//                     <DotIndicator
//                       key={index}
//                       active={currentPage === index}
//                       sx={{
//                         cursor: "pointer",
//                         backgroundColor:
//                           currentPage === index ? "#36ab89" : "#e0e0e0",
//                       }}
//                       onClick={() => {
//                         setCurrentPage(index);
//                         setLastInteraction(Date.now());
//                       }}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </Box>

//                 <IconButton
//                   onClick={handleNext}
//                   sx={{
//                     backgroundColor: "background.paper",
//                     boxShadow: 1,
//                     "&:hover": { backgroundColor: "background.paper" },
//                   }}
//                 >
//                   <ChevronRight size={24} />
//                 </IconButton>
//               </>
//             )}

//             {filteredTestimonials.length > 3 && (
//               <Button
//                 variant="outlined"
//                 onClick={() => {
//                   setIsExpanded(!isExpanded);
//                   setCurrentPage(0);
//                   setLastInteraction(Date.now());
//                 }}
//                 startIcon={
//                   isExpanded ? (
//                     <ChevronUp size={18} />
//                   ) : (
//                     <ChevronDown size={18} />
//                   )
//                 }
//                 sx={{ ml: 2, borderColor: "#36ab89", color: "#36ab89" }}
//                 color="primary"
//               >
//                 {isExpanded ? "View Less" : "View More"}
//               </Button>
//             )}
//           </Box>
//         </Box>
//       </div>
//     </ThemeProvider>
//   );
// }

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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TestimonialCard = styled(motion(Paper))(({ theme }) => ({
  // padding: theme.spacing(4),
  padding: "1rem",
  height: "100%",
  minHeight: "200px",
  borderRadius: 16,
  transition: "all 0.3s ease-in-out",
  border: "1px solid rgb(255 255 255 / 0.2)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(255 255 255 / 0.1)",
  backdropFilter: "blur(4px)",
  color: "#f0f9ff",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      "0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04)",
  },
}));

const FeaturedTestimonialCard = styled(TestimonialCard)(({ theme }) => ({
  backgroundColor: "rgba(20, 184, 166, 0.2)",
  color: "#f0f9ff",
  "& .MuiChip-root": {
    backgroundColor: "rgba(20, 184, 166, 0.4)",
    color: "#f0f9ff",
  },
}));

const DotIndicator = styled("button")(({ active }) => ({
  width: active ? "24px" : "8px",
  height: "8px",
  borderRadius: "4px",
  backgroundColor: active ? "#14b8a6" : "rgba(20, 184, 166, 0.3)",
  border: "none",
  margin: "0 4px",
  padding: 0,
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: active ? "#0d9488" : "rgba(20, 184, 166, 0.5)",
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: "8px",
  transition: "all 0.2s ease",
  backgroundColor: "rgba(20, 184, 166, 0.1)",
  color: "#f0f9ff",
  "&:hover": {
    backgroundColor: "rgba(20, 184, 166, 0.2)",
    transform: "translateY(-1px)",
  },
  "&.MuiChip-filled": {
    backgroundColor: "rgba(20, 184, 166, 0.4)",
    color: "#f0f9ff",
    "&:hover": {
      backgroundColor: "rgba(20, 184, 166, 0.5)",
    },
  },
}));

const testimonials = [
  {
    id: 1,
    name: "Tom Harris",
    text: "From the reception to the treatment room, every aspect of my experience was positive.",
    category: "General",
    avatar: "https://i.ibb.co.com/kyw2y3M/Labour-MP-Tom-Harris.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Lisa Chen",
    text: "I appreciate how they explained everything in detail and involved me in my recovery process.",
    category: "Communication",
    avatar:
      "https://thumbs.dreamstime.com/b/happy-joyful-little-girl-smiling-hands-near-face-isolated-white-background-60797111.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "John Doe",
    text: "The physiotherapy treatment I received was excellent. I'm now pain-free and back to my normal activities.",
    category: "Treatment",
    avatar:
      "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-640x640.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Jane Smith",
    text: "I was skeptical at first, but the results speak for themselves. Highly recommended!",
    category: "Results",
    avatar: "https://i.ibb.co.com/q5scnQM/images.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Mike Johnson",
    text: "The therapists are knowledgeable and caring. They really listen to your concerns.",
    category: "Staff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Speaker_Mike_Johnson_Official_Portrait.jpg/640px-Speaker_Mike_Johnson_Official_Portrait.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Emily Brown",
    text: "After my sports injury, I thought I'd never play again. Thanks to this clinic, I'm back on the field!",
    category: "Sports Injury",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/028/765/273/non_2x/american-happy-cut-baby-movement-and-child-love-beautiful-background-photo.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "David Lee",
    text: "The personalized treatment plan they created for me was exactly what I needed. I've seen significant improvement.",
    category: "Treatment",
    avatar: "https://vz.cnwimg.com/wp-content/uploads/2023/09/david-lee.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "Sarah Johnson",
    text: "I've been to many physio clinics, but this one stands out. The staff is professional and the facilities are top-notch.",
    category: "General",
    avatar: "https://i.ibb.co.com/G0vT02n/images.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "Robert Chen",
    text: "The clinic's approach to chronic pain management has been life-changing for me. I'm grateful for their expertise.",
    category: "Chronic Pain",
    avatar: "https://example.com/robert-chen.jpg",
    rating: 5,
  },
  {
    id: 10,
    name: "Emma Wilson",
    text: "As an athlete, I appreciate their sports-specific knowledge. They've helped me prevent injuries and improve performance.",
    category: "Sports Injury",
    avatar: "https://example.com/emma-wilson.jpg",
    rating: 5,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(testimonials.map((t) => t.category))),
];

const featuredTestimonial = testimonials.find((t) => t.id === 6);

export default function TestimonialTwo() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#14b8a6",
        light: "#5eead4",
        dark: "#0d9488",
        contrastText: "#ffffff",
      },
      background: {
        default: "#0f172a",
        paper: "rgba(15, 23, 42, 0.7)",
      },
      text: {
        primary: "#f0f9ff",
        secondary: "#94a3b8",
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            "&.MuiChip-filledPrimary": {
              backgroundColor: "rgba(20, 184, 166, 0.4)",
              color: "#f0f9ff",
              borderColor: "#0d9488",
            },
            "&.MuiChip-outlinedPrimary": {
              backgroundColor: "transparent",
              color: "#14b8a6",
              borderColor: "#14b8a6",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-outlinedPrimary": {
              borderColor: "#14b8a6",
              color: "#14b8a6",
              "&:hover": {
                backgroundColor: "rgba(20, 184, 166, 0.1)",
              },
            },
          },
        },
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const autoPlayRef = useRef(null);
  const [dragStart, setDragStart] = useState(null);
  const [lastInteraction, setLastInteraction] = useState(null);
  const [slideDirection, setSlideDirection] = useState(1); // 1 for right, -1 for left

  const filteredTestimonials = testimonials.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  const itemsPerPage = isExpanded ? 6 : isMobile ? 1 : isTablet ? 2 : 3;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const shouldAutoSlide = filteredTestimonials.length > itemsPerPage;

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (shouldAutoSlide) {
      autoPlayRef.current = setInterval(() => {
        const now = Date.now();
        if (now - lastInteraction >= 15000) {
          setCurrentPage((prev) => (prev + 1) % totalPages);
        }
      }, 6000);
    }
  }, [totalPages, shouldAutoSlide, lastInteraction]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [
    startAutoPlay,
    stopAutoPlay,
    itemsPerPage,
    selectedCategory,
    lastInteraction,
  ]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setLastInteraction(Date.now());
    setSlideDirection(1);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setLastInteraction(Date.now());
    setSlideDirection(-1);
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
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setSlideDirection(1); // Moving left
          handleNext();
        } else {
          setSlideDirection(-1); // Moving right
          handlePrev();
        }
      }
      setDragStart(null);
    }
    setLastInteraction(Date.now());
  };

  // bg-gradient-to-br from-black via-teal-900 to-black
  return (
    <ThemeProvider theme={theme}>
      <div className="select-none py-16 md:py-24 bg-gradient-to-br from-teal-900 via-black to-teal-900 text-white relative overflow-hidden">
        <main className="relative z-20">
          <div className="container mx-auto text-center text-4xl font-bold mb-12">
            <h1>What Our Patients Say</h1>
          </div>
          <Box
            sx={{
              maxWidth: "1400px",
              mx: "auto",
              px: 2,
            }}
          >
            {featuredTestimonial && (
              <FeaturedTestimonialCard sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ mb: 2, color: "primary.main" }}>
                  Featured Review
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.name}
                    sx={{
                      mr: 2,
                      width: 64,
                      height: 64,
                      border: "2px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <Typography variant="h6">
                    {featuredTestimonial.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    flexGrow: 1,
                    mb: 2,
                  }}
                >
                  &quot;{featuredTestimonial.text}&quot;
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FilterChip
                    label={featuredTestimonial.category}
                    variant="filled"
                    color="primary"
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        fill={
                          index < featuredTestimonial.rating
                            ? "#eab308"
                            : "none"
                        }
                        stroke="#eab308"
                      />
                    ))}
                  </Box>
                </Box>
              </FeaturedTestimonialCard>
            )}

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
                <Chip
                  key={category}
                  label={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(0);
                    setIsExpanded(false);
                    setLastInteraction(Date.now());
                  }}
                  variant={
                    selectedCategory === category ? "filled" : "outlined"
                  }
                  color="primary"
                />
              ))}
            </Box>

            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <AnimatePresence
                initial={false}
                mode="wait"
                custom={slideDirection}
              >
                <motion.div
                  key={currentPage}
                  custom={slideDirection}
                  initial={{ opacity: 0, x: 300 * slideDirection }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 * slideDirection }}
                  transition={{ duration: 0.3 }}
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
                    {getCurrentTestimonials().map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{
                              mr: 2,
                              width: 48,
                              height: 48,
                              border: "2px solid",
                              borderColor: "primary.main",
                            }}
                          />
                          <Typography variant="h6">
                            {testimonial.name}
                          </Typography>
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
                        <Box
                          sx={{
                            mt: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <FilterChip
                            label={testimonial.category}
                            color="primary"
                          />
                          {2 === "3" && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                  key={index}
                                  size={16}
                                  fill={
                                    index < testimonial.rating
                                      ? "#eab308"
                                      : "none"
                                  }
                                  stroke="#eab308"
                                />
                              ))}
                            </Box>
                          )}
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
              {shouldAutoSlide && (
                <>
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      backgroundColor: "#14b8a6",
                      color: "white",
                      "&:hover": { backgroundColor: "primary.light" },
                    }}
                  >
                    <ChevronLeft size={24} />
                  </IconButton>

                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <DotIndicator
                        key={index}
                        active={currentPage === index}
                        onClick={() => {
                          setCurrentPage(index);
                          setLastInteraction(Date.now());
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </Box>

                  <IconButton
                    onClick={handleNext}
                    sx={{
                      // backgroundColor: "background.paper",
                      backgroundColor: "#14b8a6",
                      color: "white",
                      "&:hover": { backgroundColor: "primary.light" },
                    }}
                  >
                    <ChevronRight size={24} />
                  </IconButton>
                </>
              )}

              {filteredTestimonials.length > 3 && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsExpanded(!isExpanded);
                    setCurrentPage(0);
                    setLastInteraction(Date.now());
                  }}
                  startIcon={
                    isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )
                  }
                  sx={{ ml: 2 }}
                  color="primary"
                >
                  {isExpanded ? "View Less" : "View More"}
                </Button>
              )}
            </Box>
          </Box>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        </main>
      </div>
    </ThemeProvider>
  );
}
