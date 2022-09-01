import React from 'react'

const Navbar = () => {
	return (
		<nav>
		<input type="checkbox" id="check" />
	<label for="check" class="checkbtn">
		<i class="fas fa-bars"></i>
	</label>
	<label class="logo">Discover <b>Cincinnati</b></label>
	<ul>
		<li><a class="active" href="/">Home</a></li>
		<li><a href="/"><button type="button" class="btn btn-primary">Locations</button></a></li>
		<li><a href="/">Map</a></li>
		<li><a href="/">Contact</a></li>
	</ul>
</nav>
	)
}

export default Navbar