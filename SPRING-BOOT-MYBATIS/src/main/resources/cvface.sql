/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : cvface

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2018-10-17 11:36:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `productName` varchar(255) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `productPrice` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('苹果', '01232', '23.43');
INSERT INTO `product` VALUES ('香蕉', '01233', '32.22');
INSERT INTO `product` VALUES ('椰子', '01243', '42.12');
