/*
SQLyog Ultimate v8.55 
MySQL - 5.1.65-community : Database - assignment
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`assignment` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `assignment`;

/*Table structure for table `survey` */

DROP TABLE IF EXISTS `survey`;

CREATE TABLE `survey` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `index_no` varchar(50) DEFAULT NULL,
  `type_no` varchar(20) DEFAULT NULL,
  `value_no` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=latin1;

/*Data for the table `survey` */

insert  into `survey`(`id`,`index_no`,`type_no`,`value_no`) values (216,'q_2','Question','asdasd asd dsa'),(217,'a_2_1','Answer','sdad d d d'),(218,'q_2_1','Question','sddr r r r '),(219,'a_2_1_1','Answer','dc asdf fd fsd'),(220,'q_3','Question','sdf sdf '),(221,'a_3_1','Answer','fs fsd'),(222,'a_3_2','Answer','sdf sdf'),(223,'a_3_3','Answer','sdfsdf '),(224,'a_3_4','Answer','sdf sd'),(225,'a_3_5','Answer','ghregv fsdf'),(226,'q_4','Question','sd fsf'),(227,'a_4_1','Answer','sdfs f'),(228,'q_4_1','Question','sdfsf'),(229,'a_4_1_1','Answer','fsdf sf fsd ffsdfsdf'),(230,'q_4_1_1','Question','sdfsff f sdfsf sfsf '),(231,'a_4_1_1_1','Answer','sd fsf sfds fdsf  d f s f'),(232,'q_4_1_1_1','Question',' fsdf sf d dfds sd fs s '),(233,'a_4_1_1_1_1','Answer','sdf sfsfsfsdf sd fsf'),(234,'q_5','Question','sd fdsff  s sf sd'),(235,'a_5_1','Answer',' sfsdf sdf sfsd ffsdf'),(236,'q_5_1','Question','sf sf sfd sdfs');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
