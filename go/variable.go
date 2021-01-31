package main

import (
	"fmt"
	"strconv"
)

var actorName string = "Elisabeth"
var i int = 42

var (
	actorNew string = "Matt damon"
	season   int    = 11
)

func main() {
	var i int = 3
	fmt.Printf("%T,%v\n", i, i)

	var j string
	j = strconv.Itoa(i)
	fmt.Printf("%T, %v", j, j)

}
