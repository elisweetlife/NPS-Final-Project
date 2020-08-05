  <link rel="icon" href="assets/images/favicon.png">

  <!-- Boostrap Stylesheet -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" media="screen">

  <!--  CSS stylesheet -->
  <link rel="stylesheet" href="assets/css/styles.css" media="screen">

  <!-- added -->




  Orignal header
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>NPS Locator</title>
  <link rel="icon" href="assets/images/favicon.png">



below crossorigin

    <!-- For CSS Original -->
  <!-- <link rel="stylesheet" type="text/css" href="style.css"> 

 

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>National Parks Locator</title>
    <link rel="icon" href="assets/images/favicon.png"> -->


    <!-- Boostrap Stylesheet -->
    <!-- <link rel="stylesheet" href="assets/css/bootstrap.min.css" media="screen"> ORIGINAL -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" media="screen">


    <!-- Our own CSS stylesheet -->
    <!--  <link rel="stylesheet" href="assets/css/styles.css" media="screen"> ORIGINAL -->
    <link rel="stylesheet" href="assets/css/styles.css" media="screen">





}
function getWeather(params) {
  return new Promise((resolve, reject) => {
    const call = `http:/127.0.0.1:5000/?activity=${params.activity}&climate=${params.climate}&$landscape=${params.landscape}/`;
    $.ajax({
      method:"GET",
      url:call,
      success:function(suc){
        resolve(suc);
      },
    