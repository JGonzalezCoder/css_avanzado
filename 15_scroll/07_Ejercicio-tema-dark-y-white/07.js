const button = document.querySelector(".button");
const lightTheme = {
	"--scroll-radius": "0.5rem",
	"--track-bg": "#eee",
	"--thumb-bg": "#ccc",
	"--thumb-hover": "#aaa",
	"--bg": "#fff",
	"--container-bg": "#eee",
	"--color": "#000"
}

const darkTheme = {
	"--scroll-radius": "0.5rem",
	"--track-bg": "#4e5458",
	"--thumb-bg": "#767d80",
	"--thumb-hover": "#aaa",
	"--bg": "#141618",
	"--container-bg": "#282D31",
	"--color": "#eee"
}
let pivote = false;

const set = (name, value, priority="") => {
	let style = document.documentElement.style;
	style.setProperty(name,value,priority);
}

const changeTheme = (theme) =>{
	let cssVars = Object.keys(theme);
	for(let cssVar of cssVars){
		set(`${cssVar}`,theme[cssVar]);
	}
	pivote = !pivote;
}

const chooseTheme = () =>{
	return pivote? lightTheme : darkTheme;
}

button.addEventListener("click", () => {
	changeTheme(chooseTheme());
})
