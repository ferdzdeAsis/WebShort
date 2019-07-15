-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 15, 2019 at 06:46 PM
-- Server version: 5.5.60
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bus_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE IF NOT EXISTS `admin_users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `idadmin_users_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`username`, `password`) VALUES
('bus_admin', 'admin_123');

-- --------------------------------------------------------

--
-- Table structure for table `bus_sched`
--

DROP TABLE IF EXISTS `bus_sched`;
CREATE TABLE IF NOT EXISTS `bus_sched` (
  `trip_id` int(11) NOT NULL,
  `bus_line` varchar(45) NOT NULL,
  `origin` varchar(45) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `seats_available` int(11) NOT NULL,
  `date` varchar(45) NOT NULL,
  `fare` decimal(5,2) NOT NULL,
  PRIMARY KEY (`trip_id`),
  UNIQUE KEY `trip_id_UNIQUE` (`trip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bus_sched`
--

INSERT INTO `bus_sched` (`trip_id`, `bus_line`, `origin`, `destination`, `seats_available`, `date`, `fare`) VALUES
(122, 'Partas', 'Baguio', 'Pangasinan', 35, '2019-07-14 05:30:00', '600.00'),
(123, 'Partas', 'Baguio', 'Tabuk', 45, '2019-07-14 06:00:00', '650.00'),
(124, 'Partas', 'Baguio', 'Tuguegarao', 50, '2019-07-14 07:30:00', '700.00'),
(125, 'Partas', 'Baguio ', 'Manila', 50, '2019-07-14 08:00:00', '550.00'),
(126, 'Partas', 'Baguio', 'Ilocos Sur', 45, '2019-07-14 09:00:00', '500.00'),
(127, 'Dangwa', 'Tabuk', 'Baguio', 50, '2019-07-15 07:00:00', '600.00'),
(128, 'Dangwa', 'Tabuk', 'Manila', 50, '2019-07-15 08:00:00', '650.00'),
(129, 'Dangwa', 'Tabuk', 'Cavite', 45, '2019-07-15 09:00:00', '600.00'),
(130, 'Dangwa', 'Tabuk', 'Tuguegarao', 35, '2019-07-15 10:00:00', '200.00'),
(131, 'Dangwa', 'Tabuk', 'Bontoc', 45, '2019-07-15 12:30:00', '450.00'),
(132, 'Florida', 'Apayao', 'Laoag', 50, '2019-07-16 08:00:00', '550.00'),
(133, 'Florida', 'Apayao', 'Manila', 50, '2019-07-16 09:00:00', '650.00'),
(134, 'Florida', 'Apayao', 'Tabuk', 50, '2019-07-16 10:00:00', '400.00'),
(135, 'Florida', 'Apayao', 'Tuguegarao', 45, '2019-07-16 12:00:00', '350.00'),
(136, 'Florida', 'Apayao', 'Ilocos Norte', 35, '2019-07-16 13:00:00', '550.00'),
(137, 'AB Liner Inc.', 'Bataan', 'Manila', 50, '2019-07-17 07:00:00', '400.00'),
(138, 'AB Liner Inc.', 'Bataan', 'Baguio', 45, '2019-07-17 08:00:00', '350.00'),
(139, 'AB Liner Inc.', 'Bataan', 'Pangasinan', 50, '2019-07-17 09:00:00', '300.00'),
(140, 'AB Liner Inc.', 'Bataan', 'Laoag', 45, '2019-07-17 13:00:00', '500.00'),
(141, 'AB Liner Inc.', 'Bataan', 'Zubic', 45, '2019-07-17 17:00:00', '350.00'),
(142, 'Baes Transit', 'Pangasinan', 'Baguio', 50, '2019-07-18 08:00:00', '250.00'),
(143, 'Baes Transit', 'Pangasinan', 'Manila', 50, '2019-07-18 10:00:00', '500.00'),
(144, 'Baes Transit', 'Pangasinan', 'Tuguegarao', 45, '2019-07-18 12:00:00', '520.00'),
(145, 'Baes Transit', 'Pangasinan', 'Cubao', 50, '2019-07-18 13:00:00', '400.00'),
(146, 'Baes Transit', 'Pangasinan', 'Laoag', 45, '2019-07-18 16:00:00', '300.00'),
(147, 'Bobis Liner', 'Bontoc', 'Tabuk', 50, '2019-07-19 15:00:00', '600.00'),
(148, 'Bobis Liner', 'Bontoc', 'Baguio', 50, '2019-07-19 14:00:00', '350.00'),
(149, 'Bobis Liner', 'Bontoc', 'Ifugao', 35, '2019-07-19 13:00:00', '300.00'),
(150, 'Bobis Liner', 'Bontoc', 'Apayao', 45, '2019-07-19 10:00:00', '600.00'),
(151, 'Bobis Liner', 'Bontoc', 'Isabela', 45, '2019-07-19 08:00:00', '550.00'),
(152, 'Victory Liner', 'Manila', 'Baguio', 50, '2019-07-20 18:00:00', '600.00'),
(153, 'Victory Liner', 'Manila', 'Tabuk', 50, '2019-07-20 16:00:00', '650.00'),
(154, 'Victory Liner', 'Manila', 'Tuguegarao', 50, '2019-07-20 13:00:00', '650.00'),
(155, 'Victory Liner', 'Manila', 'Ilocos Sur', 45, '2019-07-20 10:00:00', '550.00'),
(156, 'Victory Liner', 'Manila', 'Cubao', 50, '2019-07-20 08:00:00', '400.00');

-- --------------------------------------------------------

--
-- Table structure for table `client_users`
--

DROP TABLE IF EXISTS `client_users`;
CREATE TABLE IF NOT EXISTS `client_users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `contact_number` varchar(45) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client_users`
--

INSERT INTO `client_users` (`username`, `password`, `first_name`, `last_name`, `contact_number`) VALUES
('cleo111', 'cleo111', 'Cleo', 'Mazzarella', '09123456789'),
('julius122', 'julius122', 'Julius', 'Criner', '09123456790'),
('latesha133', 'latesha133', 'Latesha', 'Janik', '09123456791'),
('malena144', 'malena144', 'Malena', 'Ecton', '09123456792'),
('dovie155', 'dovie155', 'Dovie', 'Ham', '09123456793'),
('dale166', 'dale166', 'Dale', 'Asmus', '09123456794'),
('noma177', 'noma177', 'Noma', 'Rusher', '09123456795'),
('shandi188', 'shandi188', 'Shandi', 'Howser', '09123456796'),
('chante199', 'chante199', 'Chante', 'Woermer', '09123456797'),
('roxana200', 'roxana200', 'Roxana', 'Fodor', '09123456798');

-- --------------------------------------------------------

--
-- Table structure for table `reserved`
--

DROP TABLE IF EXISTS `reserved`;
CREATE TABLE IF NOT EXISTS `reserved` (
  `trip_id` int(11) NOT NULL,
  `reserve_id` varchar(45) NOT NULL,
  `seatNo` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `client_name` varchar(45) NOT NULL,
  PRIMARY KEY (`reserve_id`),
  UNIQUE KEY `reserve_id_UNIQUE` (`reserve_id`)
) ENGINE=MyISAM AUTO_INCREMENT=516 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reserved`
--

INSERT INTO `reserved` (`trip_id`, `reserve_id`, `seatNo`, `amount`, `client_name`) VALUES
(147, 'WYcgbgl', 1, 600, 'cleo111'),
(126, 'fQ4II8J', 1, 500, 'cleo111'),
(122, 'ZcIC2ZL', 1, 600, 'cleo111'),
(125, 'SQrsI3a', 3, 1650, 'cleo111'),
(123, 'savvZEi', 1, 650, 'undefined'),
(137, 'FafbJFv', 15, 6000, 'cleo111');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
