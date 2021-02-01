<template>
  <div class="row">
    <div class="column middle">
      <h2>Main Content</h2>

      <img
        src="@/assets/Sonicad.jpg"
        alt="Sonic Photo"
        style="width: 10%; height: 10%"
      />
      <p>
        <strong>More Hats!</strong> I am crazy about hats these days. Some text
        about this blog entry. Fashion fashion and mauris neque quam, fermentum
        ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
        placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at.
        Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt
        sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
        ultricies congue gravida diam non fringilla.
      </p>
      <p>
        Sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco.
      </p>
    </div>
  </div>
</template>



<style scoped>
.column {
  float: left;
  padding: 20px;
}

p {
  margin-top: 10px;
}

.row {
  background: aliceblue;
}

.column.middle {
  width: 100%;
  height: 10%;
  border-style: solid;
  border-color: black;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>



