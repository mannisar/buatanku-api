/*
SQLyog Professional v12.5.1 (64 bit)
MySQL - 10.4.11-MariaDB : Database - buatanku
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`buatanku` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `buatanku`;

/*Table structure for table `application` */

DROP TABLE IF EXISTS `application`;

CREATE TABLE `application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `card_desc` text COLLATE latin1_general_ci NOT NULL,
  `short_desc` text COLLATE latin1_general_ci NOT NULL,
  `long_desc` text COLLATE latin1_general_ci NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_label` int(11) NOT NULL,
  `photo` varchar(256) COLLATE latin1_general_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `application` */

insert  into `application`(`id`,`name`,`card_desc`,`short_desc`,`long_desc`,`id_category`,`id_label`,`photo`,`date_added`,`date_updated`) values 
(1,'SigApp','Aplikasi Real Time Chat','SigApp diambil dari kata \'Sigap\" yang berarti \'Cepat\'.','Aplikasi ini dibuat oleh developer yang kita kenal di indonesia yaitu mannisar, aplikasi ini memliki fitur real time chat sehingga bisa memberikan pesan kepada teman ataupun keluarga dengan waktu dan tempat yang berbeda. dan aplikasi ini memiliki fitur real time maps sehingga kita bisa mengetahui keberadaan orang.',15,2,'[{\"photo\":\"http://localhost:3023/upload/photo-1586678392375.jpg\"},{\"photo\":\"http://localhost:3023/upload/photo-1586678392379.jpg\"},{\"photo\":\"http://localhost:3023/upload/photo-1586678392576.jpg\"}]','2020-04-12 14:52:30','2020-04-12 17:26:44'),
(2,'Cashierun','Aplikasi Point of Sales','Cashierun diambil dari kata bahasa inggris \'Cashier\' yaitu artinya kasir/pemegang kas.','Aplikasi ini dibuat oleh developer yang kita kenal di indonesia yaitu mannisar, aplikasi ini memliki fitur transaksi produk, mengelola data produk, category, dan akun, memanajemen admin/cashier, dan melihat pendapatan berdasarkan harian, mingguan, dan bulanan.',12,1,'[{\"photo\":\"http://localhost:3023/upload/photo-1586710492293.jpg\"},{\"photo\":\"http://localhost:3023/upload/photo-1586710492333.jpg\"},{\"photo\":\"http://localhost:3023/upload/photo-1586710492334.jpg\"}]','2020-04-12 23:54:52','2020-04-12 23:54:52');

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `category` */

insert  into `category`(`id`,`name`) values 
(1,'Agtech'),
(2,'E-commerce'),
(3,'Edtech'),
(4,'Fintech'),
(5,'Healthtech'),
(6,'Insurtech'),
(7,'Legaltech'),
(8,'Loyalty Platform'),
(9,'New Retail'),
(10,'On-Demand'),
(11,'OTA'),
(12,'POS'),
(13,'Proptech'),
(14,'Ride Hailing'),
(15,'Chatting');

/*Table structure for table `label` */

DROP TABLE IF EXISTS `label`;

CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `label` */

insert  into `label`(`id`,`name`) values 
(1,'Website'),
(2,'Mobile'),
(3,'Website & Mobile');

/*Table structure for table `photo` */

DROP TABLE IF EXISTS `photo`;

CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(55) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `photo` */

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `role` */

insert  into `role`(`id`,`name`) values 
(1,'Owner'),
(2,'Developer'),
(3,'Client'),
(4,'Anonymous');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `last_name` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `password` varchar(256) COLLATE latin1_general_ci NOT NULL,
  `salt` varchar(256) COLLATE latin1_general_ci NOT NULL,
  `no_handphone` varchar(13) COLLATE latin1_general_ci NOT NULL,
  `company` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `address` text COLLATE latin1_general_ci NOT NULL,
  `id_role` int(11) NOT NULL,
  `avatar` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`first_name`,`last_name`,`email`,`password`,`salt`,`no_handphone`,`company`,`address`,`id_role`,`avatar`,`date_added`,`date_updated`) values 
(1,'Salman','Isar','mannisar@mail.com','8509663ad47eb0021763f8ee86345b82c86249cc48cf3447853504ba3a07dc1aa414c8ad5414b8d4bb1e3b84681d3c3a156bc0290694de0c29dd59d32d9d70c8','b513b0166a5d10116b','085819418630','manvincicode','Bogor, Indonesia',1,'http://localhost:3023/upload/avatar-1586677467332.png','2020-04-12 14:44:27','2020-04-12 14:44:27');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
