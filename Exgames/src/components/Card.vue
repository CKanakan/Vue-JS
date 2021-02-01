<template>
  <div>
    <div class="row mr-4">
      <div class="leftcolumn">
        <div class="card ml-4">
          <h2>About</h2>
          <p>
            <strong>More Hats!</strong> I am crazy about hats these days. Some
            text about this blog entry. Fashion fashion and mauris neque quam,
            fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
            lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
            tortor cursus at. Phasellus sed ultricies mi non congue ullam
            corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <div class="card ml-4">
          <h2>Notes</h2>

          <p><b>Notes</b></p>
          <hr />
          <p>
            <strong>More Hats!</strong> I am crazy about hats these days. Some
            text about this blog entry. Fashion fashion and mauris neque quam,
            fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
            lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
            tortor cursus at. Phasellus sed ultricies mi non congue ullam
            corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <hr />

          <p>
            <strong>More Hats!</strong> I am crazy about hats these days. Some
            text about this blog entry. Fashion fashion and mauris neque quam,
            fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
            lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
            tortor cursus at. Phasellus sed ultricies mi non congue ullam
            corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
      <div class="rightcolumn">
        <div class="card">
          <p>Notes</p>
        </div>
        <div class="card">
          <div class="fakeimg">
            <a href=""> <p>Notes</p></a>
          </div>

          <div class="fakeimg2">
            <a href=""><p>Notes</p></a>
          </div>
          <div class="fakeimg">
            <a href=""><p>Notes</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  width: 100%;
  padding: 20px;
}

.fakeimg2 {
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>