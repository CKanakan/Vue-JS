<template>
  <div>
    <div class="navbar ml-4">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template> 

<style scoped>
nav{
  width:100%;
  
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  /*overflow: hidden;*/
  background-color: #333;
  
}

li {
  float: left;
  background-color:black ;
  width: 100%;

}

li a {
    
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {

  background-color: #111;
}
</style>