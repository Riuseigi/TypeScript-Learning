let myname = "shaun";

function reverse(str: string) {
  return str.split("").reverse().join("");
}

const result = reverse("hello");

console.log(result);

interface MenuItem {
  title: string;
  cost: number;
}
function printMenu(item: MenuItem) {
  console.log(item.title, ":", item.cost);
}

printMenu();
