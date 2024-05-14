CREATE DATABASE MEDICAMENTOS;
GO

USE MEDICAMENTOS;
GO

CREATE TABLE Enfermedades (
    ID_Enfermedad INT PRIMARY KEY,
    Nombre_Enfermedad NVARCHAR(100) NOT NULL
);
GO

INSERT INTO Enfermedades (ID_Enfermedad, Nombre_Enfermedad)
VALUES 
    (1, 'Resfriado común'),
    (2, 'Gripe'),
    (3, 'Dolor de cabeza'),
    (4, 'Gastritis'),
    (5, 'Hipertensión'),
    (6, 'Diabetes'),
    (7, 'Asma'),
    (8, 'Artritis'),
    (9, 'Eczema'),
    (10, 'Insomnio');
GO

CREATE TABLE Medicamentos (
    ID_Medicamento INT PRIMARY KEY NOT NULL,
    Nombre_Medicamento NVARCHAR(100) NOT NULL,
    Precio_PesosColombianos DECIMAL(10, 2) NOT NULL,
    ID_Enfermedad_Alivia INT NOT NULL,
    Cantidad_ingerir INT NOT NULL,
    Frecuencia_Toma NVARCHAR(50) NOT NULL,
    FOREIGN KEY (ID_Enfermedad_Alivia) REFERENCES Enfermedades(ID_Enfermedad)
);
GO

INSERT INTO Medicamentos (ID_Medicamento, Nombre_Medicamento, Precio_PesosColombianos, ID_Enfermedad_Alivia, Cantidad_ingerir, Frecuencia_Toma)
VALUES
    (1, 'Ibuprofeno', 5000.00, 1, 1, 'Cada 6 horas'),
    (2, 'Paracetamol', 4000.00, 1, 1, 'Cada 8 horas'),
    (3, 'Antigripal', 6000.00, 2, 1, 'Cada 12 horas'),
    (4, 'Omeprazol', 8000.00, 4, 1, 'Diariamente'),
    (5, 'Losartán', 10000.00, 5, 1, 'Diariamente'),
    (6, 'Insulina', 15000.00, 6, 1, 'Según indicación médica'),
    (7, 'Salbutamol', 7000.00, 7, 1, 'Cada 4 horas'),
    (8, 'Ibuprofeno', 5000.00, 8, 1, 'Cada 8 horas'),
    (9, 'Prednisona', 9000.00, 8, 1, 'Diariamente'),
    (10, 'Cetirizina', 6000.00, 9, 1, 'Diariamente'),
    (11, 'Melatonina', 10000.00, 10, 1, 'Diariamente'),
    (12, 'Loratadina', 7000.00, 9, 1, 'Diariamente'),
    (13, 'Ranitidina', 8500.00, 4, 1, 'Diariamente'),
    (14, 'Metformina', 9500.00, 6, 1, 'Diariamente'),
    (15, 'Ventolin', 7500.00, 7, 1, 'Según indicación médica'),
    (16, 'Enalapril', 8500.00, 5, 1, 'Diariamente'),
    (17, 'Warfarina', 10500.00, 8, 1, 'Diariamente'),
    (18, 'Atorvastatina', 11000.00, 5, 1, 'Diariamente'),
    (19, 'Simvastatina', 10000.00, 5, 1, 'Diariamente'),
    (20, 'Rivotril', 12000.00, 10, 1, 'Según indicación médica'),
    (21, 'Zolpidem', 9000.00, 10, 1, 'Diariamente'),
    (22, 'Diazepam', 9500.00, 10, 1, 'Según indicación médica'),
    (23, 'Alprazolam', 10000.00, 10, 1, 'Según indicación médica'),
    (24, 'Alendronato', 11500.00, 8, 1, 'Semanalmente'),
    (25, 'Sildenafil', 12500.00, 8, 1, 'Según indicación médica'),
    (26, 'Tadalafilo', 13000.00, 8, 1, 'Según indicación médica'),
    (27, 'Captopril', 8000.00, 5, 1, 'Diariamente'),
    (28, 'Clonazepam', 9500.00, 10, 1, 'Según indicación médica'),
    (29, 'Ciclobenzaprina', 9000.00, 8, 1, 'Según indicación médica'),
    (30, 'Diclofenaco', 8500.00, 8, 1, 'Cada 12 horas');
GO