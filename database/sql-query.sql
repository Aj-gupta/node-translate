-- Creating table
CREATE TABLE IF NOT EXISTS `freedbtech_translate`.`translate` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `source` TEXT NULL DEFAULT NULL,
  `target` TEXT NULL DEFAULT NULL,
  `slang` CHAR(2) CHARACTER SET 'latin1' NOT NULL,
  `tlang` CHAR(2) CHARACTER SET 'latin1' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1039
DEFAULT CHARACTER SET = utf8;

-- for changing database charset
ALTER DATABASE freedbtech_translate CHARACTER SET utf8 COLLATE utf8_general_ci;

ALTER TABLE translate CHARACTER SET utf8;

ALTER TABLE translate MODIFY target text CHARACTER SET utf8;

ALTER TABLE translate MODIFY source text CHARACTER SET utf8;