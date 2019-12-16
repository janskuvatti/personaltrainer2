import React from 'react';

import"bootstrap/dist/css/bootstrap.min.css";
const Navigation = () => {
return (
    <div>
		<ul class="nav nav-pills nav-fill">

<li class="nav-item">
<a class="nav-link " style={{color: "white"}} href="/">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link" style={{color: "white"}} href="/customers">Customers</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/trainings" style={{color: "white"}}>Trainings</a>
</li>

</ul>
  </div>
)
}
export default Navigation