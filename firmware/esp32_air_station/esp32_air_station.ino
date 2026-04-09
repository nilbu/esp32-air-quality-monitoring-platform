/*
  ESP32 Air Quality Station

  Features:
  - PMS5003 (PM1, PM2.5, PM10)
  - BME280 (temperature, humidity, pressure)
  - Median filter (PM)
  - EMA filter (environmental data)
  - Humidity correction
  - Sensor duty cycle + clean cycle
  - Google Sheets integration via HTTP

  Hardware:
  ESP32 DevKit
  PMS5003 (UART)
  BME280 (I2C)

  Author: Tomek B
*/


