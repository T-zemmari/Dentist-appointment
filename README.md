<h1 align="center">
  <br>Dental Clinic API REST
</h1>

<h4 align="center">Backend for an appointment web app with node.js, express & MySQL.</h4>

<br>
<p align="center">
  <a href="#about">About</a> •
  <a href="#usage">Usage</a> •
  <a href="#environment">Environment variables</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#features">Features</a>
</p>

---

## About

<table>
<tr>
<td>
<br>

**This RESTful API** acts as a back-end for a clinic's appointments app. Through this app, patients may register, log in, make an appointment and view their personal profile and future appointments.

The API is built on <b>Node.js</b> with the <b>Express</b> library, connected to a <b>MySQL</b> database through <b>Sequelize</b>. User authentication is done through <b>JWT</b>.

This project was created for educational purposes at <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a>'s Full Stack Developer Bootcamp by Tarek Zemmari and Federico Báez in Valencia, Spain on 2021-3-02 to 2021-3-04.


</td>
</tr>
</table>
<br>

## Usage

[Click here to view the API documentation](https://documenter.getpostman.com/view/14551874/Tz5iBMaE) or

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e7eb70030ba882a484c1)

Alternatively, the project may be downloaded from <a href="https://github.com/T-zemmari/Dentist-appointment/archive/main.zip">this link</a>. You're welcome to borrow our code.

<br>

<div id="environment"></div>

##  Trello

![Tareas hechas ](https://user-images.githubusercontent.com/76817211/110012463-d7ed2300-7d20-11eb-83d4-ae554e6c50b0.jpg)

We have used Kanvan for the distribution of tasks, and there we have included the endpoints of the API.



## Environment variables summary

* NODE_ENV: development/production - Changes default settings (default: development)
* PORT: Port for server to listen on (default: 3000)
* JWT_SECRET: Secret for JWT signing (required)
* MYSQL_HOST: Database url (defaults to config)
* MYSQL_PORT: Database port - not necessary if host is domain (defaults to config)
* MYSQL_DATABASE: Database name (defaults to config)
* MYSQL_USER: Database user (defaults to config)
* MYSQL_PASSWORD: Database password (defaults to config)

<br>

## Dependencies

* express (server, endpoints and middleware)
* sequelize (ORM for MySQL)
* bcryptjs (password encryption)
* jsonwebtoken (authentication)

<br>

## Features

* RESTful architecture
* User and Appointment resources
* Log in & authentication over JWT
* Optional flag to consult only future user appointments

<br>
