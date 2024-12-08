-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 12:48 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(7, 'Famous Chicken Adobo', 'beef', 'easy', 6, '15 mins', 'adobo1.webp', '[{\"ingredients\":\"vegetable oil\",\"amount\":\"2\",\"unit\":\"tbs\"},{\"ingredients\":\"chicken, cut into pieces\",\"amount\":\"1 (3 pound)\",\"unit\":\"Large\"},{\"ingredients\":\"large onion, quartered and sliced\",\"amount\":\"1\",\"unit\":\"Large\"},{\"ingredients\":\"minced garlic\",\"amount\":\"2\",\"unit\":\"tbs\"},{\"ingredients\":\"low sodium soy sauce\",\"amount\":\"\\u2154\",\"unit\":\"cup\"},{\"ingredients\":\"white vinegar\",\"amount\":\"\\u2153 \",\"unit\":\"cup\"},{\"ingredients\":\"garlic powder\",\"amount\":\"1\",\"unit\":\"tbs\"},{\"ingredients\":\"black pepper\",\"amount\":\"2\",\"unit\":\"ts\"},{\"ingredients\":\"bay leaf\",\"amount\":\"1\",\"unit\":\"pcs\"}]', 'This chicken adobo recipe is simple to make and loved by all who try it! It has been modified to be a bit saucier than traditional adobo and is delicious served over rice.', '##### Step1\n\nHeat **vegetable** oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown, 2 to 3 minutes per side. Transfer chicken to a plate and set aside.\n\n##### Step2\nAdd onion and garlic to the skillet; cook until softened and brown, about 3 to 5 minutes.\n\n\n\n##### Step3\nPour in soy sauce and vinegar and season with garlic powder, black pepper, and bay leaf.\n\n##### Step4\nReturn chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes.\n\n![Tux, the Linux mascot](https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/04/27/Chocolate-Dunkaroos-Packaging_s4x3.jpg.rend.hgtvcom.476.357.suffix/1619534052470.jpeg)', 1, '2024-12-04 15:10:25', '2024-12-04 12:56:57'),
(8, 'Traditional Filipino Lumpia', 'beef', 'easy', 15, '40 mins', 'lumpia.jpg', '[{\"ingredients\":\"vegetable oil\",\"amount\":\"1\",\"unit\":\"tbs\"},{\"ingredients\":\"ground pork\",\"amount\":\"1\",\"unit\":\"pd\"},{\"ingredients\":\"chopped onion\",\"amount\":\"\\u00bd\",\"unit\":\"cup\"},{\"ingredients\":\"cloves garlic\",\"amount\":\"2\",\"unit\":\"crush\"},{\"ingredients\":\"minced carrots\",\"amount\":\"\\u00bd \",\"unit\":\"cup\"}]', 'This is a traditional Filipino recipe for lumpia, or fried spring rolls. They\\\'re made with paper-thin lumpia wrappers and filled with a savory mixture of ground pork, cabbage, and other vegetables. Serve lumpia as a side dish or appetizer with a sweet chili dipping sauce.', 'ou\\\'ll find the full, step-by-step recipe below — but here\\\'s a brief overview of what you can expect:\n\n1. Make the filling: Cook the pork until crumbly and set aside. Drain most (but not all) of the grease. Cook the onion and garlic in the remaining grease. Return the pork to the pan and stir in the veggies, cilantro, and seasonings. Remove from heat and let cool.\n2. Assemble the lumpia: Place three tablespoons of the filling on the wrapper and follow the instructions to roll and seal the lumpia. Repeat until all the rolls are assembled.\n3. Fry the lumpia: Heat oil in a skillet. Fry the lumpia three to four rolls at a time. Turn until all sides are brown. Drain on a paper towel.', 1, '2024-12-04 13:00:11', '2024-12-04 13:00:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
