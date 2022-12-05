-- Path: case-notes-mobile-backend\planetscale-Contacts.sql

CREATE TABLE `Contacts` (
	`contactId` int NOT NULL AUTO_INCREMENT,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`modifiedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`patientId` int NOT NULL,
	`title` varchar(191),
	`firstName` varchar(191) NOT NULL,
	`middleInitial` varchar(191),
	`lastName` varchar(191),
	`phone` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`sex` varchar(191),
	`dateOfBirth` datetime(3),
	`street` varchar(191) NOT NULL,
	`city` varchar(191) NOT NULL,
	`state` varchar(191) NOT NULL,
	`zip` varchar(191) NOT NULL,
	`relationToPatient` varchar(191),
	`type` varchar(191) NOT NULL,
	`emergencyPriority` varchar(191),
	`signature` varchar(191),
	PRIMARY KEY (`contactId`)
);

-- Path: case-notes-mobile-backend\planetscale-patients.sql

CREATE TABLE `Patients` (
	`patientId` int NOT NULL AUTO_INCREMENT,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`modifiedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`title` varchar(191),
	`firstName` varchar(191) NOT NULL,
	`middleInitial` varchar(191),
	`lastName` varchar(191) NOT NULL,
	`phone` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`sex` varchar(191) NOT NULL,
	`ssn` varchar(191) NOT NULL,
	`dateOfBirth` datetime(3) NOT NULL,
	`street` varchar(191) NOT NULL,
	`city` varchar(191) NOT NULL,
	`state` varchar(191) NOT NULL,
	`zip` varchar(191) NOT NULL,
	`insuranceCompany` varchar(191),
	`plan` varchar(191),
	`groupNumber` varchar(191),
	`cardHolder` varchar(191),
	`medications` json,
	`allergies` json,
	`surgeries` json,
	`familyHistory` json,
	`addictions` json,
	`questionnaire` json,
	`symptoms` json,
	`signature` varchar(191) NOT NULL,
	PRIMARY KEY (`patientId`),
	UNIQUE KEY `Patients_email_key` (`email`)
);

-- Path: case-notes-mobile-backend\planetscale-appointments.sql

CREATE TABLE `Appointments` (
	`appointmentId` int NOT NULL AUTO_INCREMENT,
	`appointmentScheduleFrom` datetime NOT NULL,
	`appointmentScheduleTo` datetime NOT NULL,
	`appointmentType` varchar(45) NOT NULL,
	`appointmentStatus` varchar(100) NOT NULL DEFAULT 'free',
	`appointmentPatientName` varchar(100),
	`appointmentPatientSession` varchar(100),
	`doctorId` int NOT NULL,
	`PatientId` int NOT NULL,
	PRIMARY KEY (`appointmentId`)
);

-- Path: case-notes-mobile-backend\planetscale-schedule.sql

CREATE TABLE `Schedules` (
	`scheduleId` int NOT NULL,
	`scheduleActivity` varchar(255) NOT NULL,
	`roomNumber` int NOT NULL,
	`providerGroup` varchar(255) NOT NULL,
	`userId` int NOT NULL,
	`userName` varchar(255) NOT NULL,
	`patientId` int NOT NULL,
	`scheduleDate` date,
	`scheduleFrom` datetime,
	`scheduleTo` datetime,
	`scheduleStatus` varchar(255),
	PRIMARY KEY (`scheduleId`)
);