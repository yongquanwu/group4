-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `high_risk` int DEFAULT NULL,
  `medium_risk` int DEFAULT NULL,
  `low_risk` int DEFAULT NULL,    
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1, 'Tony', 'Tan', 'ttan@cloudflare.com', '7U1QTUpJjOn', 50, 0, 50),
(2, 'Franky', 'Sauvain', 'fsauvain1@samsung.com', 'UM9FH6v', 25, 0, 75),
(3, 'Timmie', 'Kensington', 'tkensington2@earthlink.net', 'mHaNs2pS4r', 55, 0, 45),
(4, 'Dita', 'Cartmail', 'dcartmail7@ucoz.ru', 'WTZBvYoY', 30, 0, 70),
(5, 'Randie', 'Goldsworthy', 'rgoldsworthy8@springer.com', 'DF9lyQu', 60, 0, 40),
(6, 'Lesley', 'Filipyev', 'lfilipyev9@dot.gov', 'lK7K1HqJq', 10, 0, 90);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_records`
--

DROP TABLE IF EXISTS `stock_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_records` (
  `srecord_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `exchange_code` varchar(10) DEFAULT NULL,
  `stock_code` varchar(10) DEFAULT NULL,
  `no_of_shares` int DEFAULT NULL,
  `purchase_cost` double DEFAULT NULL,
  `current_price` double DEFAULT NULL, 
  PRIMARY KEY (`srecord_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_records`
--

LOCK TABLES `stock_records` WRITE;
/*!40000 ALTER TABLE `stock_records` DISABLE KEYS */;
INSERT INTO `stock_records` VALUES
(1,1,'SES','D05',1000,29.50,29.90),
(2,1,'SES','E5H',25000,0.20,0.22),
(3,2,'SES','S51',10000,0.12,0.12),
(4,1,'SES','Z74',12000,2.25,2.28),
(5,3,'SES','O39',2000,11.80,11.88),
(6,2,'SES','BSL',5000,1.20,1.16),
(7,5,'SES','BCV',10000,0.20,0.21),
(8,1,'SES','S51',15000,0.13,0.12),
(9,3,'SES','E5H',15000,0.25,0.22),
(10,1,'SES','BSL',6000,1.25,1.16);
/*!40000 ALTER TABLE `stock_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deposit_records`
--

DROP TABLE IF EXISTS `deposit_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deposit_records` (
  `drecord_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `bank_name` varchar(10) DEFAULT NULL,
  `deposit_type` varchar(10) DEFAULT NULL,
  `deposit_amt` double DEFAULT NULL,
  `interest_rate` double DEFAULT NULL,
  PRIMARY KEY (`drecord_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desposit_records`
--

LOCK TABLES `deposit_records` WRITE;
/*!40000 ALTER TABLE `deposit_records` DISABLE KEYS */;
INSERT INTO `deposit_records` VALUES
(1,1,'DBS','Savings Account',50000.00,0.05),
(2,1,'OCBC','Savings Account',10000.00,0.05),
(3,2,'UOB','Savings Account',20000.00,0.05),
(4,1,'Maybank','Fixed Deposit',50000.00,1.00),
(5,2,'Stanchart','Fixed Deposit',100000.00,0.80),
(6,3,'DBS','Savings Account',30000.00,0.05),
(7,4,'OCBC','Savings Account',50000.00,0.05),
(8,3,'DBS','Current Account',0.00,0.00),
(9,2,'UOB','Current Account',0.00,0.00),
(10,6,'HSBC','Savings Account',30000.00,0.25),
(11,5,'Citibank','Savings Account',50000.00,0.50),
(12,4,'OCBC','Current Account',0.00,0.00);
/*!40000 ALTER TABLE `deposit_records` ENABLE KEYS */;
UNLOCK TABLES;
