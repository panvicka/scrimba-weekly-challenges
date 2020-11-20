let iconCoin:  HTMLImageElement; 
let iconWallet:  HTMLImageElement; 


iconCoin = <HTMLImageElement>document.querySelector('#icon-coins')!;
iconWallet = <HTMLImageElement>document.querySelector('#icon-wallet')!;

export function addIconsPaths() {


    iconWallet.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ2OS4zNDEgNDY5LjM0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjM0MSA0NjkuMzQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNNDQ4LjAwNCwyMzYuNjM5di02NS45NjVjMC0yMi4zNjgtMTcuMzUtNDAuNTU5LTM5LjI3MS00Mi4zMjNsLTYxLjI2LTEwN2MtNS42NzctOS44OTYtMTQuODQ0LTE2Ljk2OS0yNS44MTMtMTkuOTA2DQoJCQkJYy0xMC45MTctMi45MTctMjIuMzMzLTEuMzg1LTMyLjEwNCw0LjMwMkw3OS41NTMsMTI4LjAwN0g0Mi42N2MtMjMuNTMxLDAtNDIuNjY3LDE5LjEzNS00Mi42NjcsNDIuNjY3djI1Ng0KCQkJCWMwLDIzLjUzMSwxOS4xMzUsNDIuNjY3LDQyLjY2Nyw0Mi42NjdoMzYyLjY2N2MyMy41MzEsMCw0Mi42NjctMTkuMTM1LDQyLjY2Ny00Mi42Njd2LTY1Ljk2NQ0KCQkJCWMxMi4zODktNC40MTgsMjEuMzMzLTE2LjE0NywyMS4zMzMtMzAuMDM1di02NEM0NjkuMzM3LDI1Mi43ODYsNDYwLjM5MywyNDEuMDU3LDQ0OC4wMDQsMjM2LjYzOXogTTM4My45NDQsMTI4LjAwN2gtOTIuOTcxDQoJCQkJbDY5LjcyOS00MC41OTZMMzgzLjk0NCwxMjguMDA3eiBNMzUwLjEwMyw2OC44OThsLTEwMS41MjksNTkuMTA5aC00Mi4xMTNsMTMzLjExMi03Ny41TDM1MC4xMDMsNjguODk4eiBNMzAwLjI5NSwyNC4xODQNCgkJCQljNC44MjMtMi44MjMsMTAuNDU4LTMuNTczLDE1Ljg0NC0yLjEzNWM1LjQ0OCwxLjQ1OCw5Ljk5LDQuOTc5LDEyLjgxMyw5LjkwNmwwLjAyMiwwLjAzOWwtMTY0LjkxLDk2LjAxM2gtNDIuMTExTDMwMC4yOTUsMjQuMTg0DQoJCQkJeiBNNDI2LjY3LDQyNi42NzRjMCwxMS43Ni05LjU3MywyMS4zMzMtMjEuMzMzLDIxLjMzM0g0Mi42N2MtMTEuNzYsMC0yMS4zMzMtOS41NzMtMjEuMzMzLTIxLjMzM3YtMjU2DQoJCQkJYzAtMTEuNzYsOS41NzMtMjEuMzMzLDIxLjMzMy0yMS4zMzNoMzYyLjY2N2MxMS43NiwwLDIxLjMzMyw5LjU3MywyMS4zMzMsMjEuMzMzdjY0aC02NGMtMzUuMjkyLDAtNjQsMjguNzA4LTY0LDY0DQoJCQkJYzAsMzUuMjkyLDI4LjcwOCw2NCw2NCw2NGg2NFY0MjYuNjc0eiBNNDQ4LjAwNCwzMzAuNjc0YzAsNS44ODUtNC43ODEsMTAuNjY3LTEwLjY2NywxMC42NjdIMzYyLjY3DQoJCQkJYy0yMy41MzEsMC00Mi42NjctMTkuMTM1LTQyLjY2Ny00Mi42NjdjMC0yMy41MzEsMTkuMTM1LTQyLjY2Nyw0Mi42NjctNDIuNjY3aDc0LjY2N2M1Ljg4NSwwLDEwLjY2Nyw0Ljc4MSwxMC42NjcsMTAuNjY3DQoJCQkJVjMzMC42NzR6Ii8+DQoJCQk8cGF0aCBkPSJNMzYyLjY3LDI3Ny4zNDFjLTExLjc2LDAtMjEuMzMzLDkuNTczLTIxLjMzMywyMS4zMzNjMCwxMS43Niw5LjU3MywyMS4zMzMsMjEuMzMzLDIxLjMzMw0KCQkJCWMxMS43NiwwLDIxLjMzMy05LjU3MywyMS4zMzMtMjEuMzMzQzM4NC4wMDQsMjg2LjkxNCwzNzQuNDMxLDI3Ny4zNDEsMzYyLjY3LDI3Ny4zNDF6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

    iconCoin.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTU5Ljk4OSwyMWMtMC4wOTktMS43MTEtMi4xMzQtMy4wNDgtNi4yMDQtNC4wNjhjMC4xMzctMC4zLDAuMjE0LTAuNjEyLDAuMjE1LTAuOTM2VjloLTAuMDE3QzUzLjYyNSwzLjE3MiwyOS43NDMsMywyNywzDQoJUzAuMzc1LDMuMTcyLDAuMDE3LDlIMHYwLjEzdjB2MGwwLDYuODY5YzAuMDA1LDEuOSwyLjQ1NywzLjM4Nyw2LjEwNSw0LjQ5NGMtMC4wNSwwLjE2Ni0wLjA4LDAuMzM1LTAuMDksMC41MDdINnYwLjEzdjB2MGwwLDYuODU3DQoJQzIuMDcsMjguOTk5LDAuMTA3LDMwLjMxNywwLjAxLDMySDB2MC4xM3YwdjBsMCw2Ljg2OWMwLjAwMywxLjMyMywxLjE5NiwyLjQ0NSwzLjE0OCwzLjM4Yy0wLjA3NCwwLjIwMy0wLjEyLDAuNDEtMC4xMzMsMC42MjJIMw0KCXYwLjEzdjB2MGwwLDYuODY5YzAuMDA4LDMuMzI2LDcuNDk3LDUuMzkxLDE1LjgxOCw2LjM1NWMwLjA2MSwwLjAxMiwwLjExNywwLjAzNywwLjE4MiwwLjAzN2MwLjAxOSwwLDAuMDM1LTAuMDEsMC4wNTQtMC4wMTENCgljMS42MDQsMC4xODEsMy4yMzQsMC4zMjIsNC44NDcsMC40MjNjMC4wMzQsMC4wMDQsMC4wNjQsMC4wMiwwLjA5OSwwLjAyYzAuMDE5LDAsMC4wMzQtMC4wMSwwLjA1Mi0wLjAxMQ0KCUMyNi4xLDU2LjkzNywyOC4xMTUsNTcsMzAsNTdjMS44ODUsMCwzLjktMC4wNjMsNS45NDgtMC4xODhjMC4wMTgsMC4wMDEsMC4wMzQsMC4wMTEsMC4wNTIsMC4wMTFjMC4wMzUsMCwwLjA2NS0wLjAxNywwLjA5OS0wLjAyDQoJYzEuNjEzLTAuMTAxLDMuMjQzLTAuMjQxLDQuODQ3LTAuNDIzQzQwLjk2NSw1Ni4zOCw0MC45ODEsNTYuMzksNDEsNTYuMzljMC4wNjUsMCwwLjEyMS0wLjAyNSwwLjE4Mi0wLjAzNw0KCWM4LjMyMS0wLjk2NCwxNS44MDktMy4wMywxNS44MTgtNi4zNTdWNDNoLTAuMDE2Yy0wLjA3LTEuMjI2LTEuMTE1LTIuMjQ5LTMuMTc5LTMuMTA0YzAuMTI2LTAuMjg5LDAuMTk1LTAuNTg5LDAuMTk1LTAuOVYzMi40Ng0KCWMzLjU5LTEuMTA0LDUuOTk1LTIuNTgxLDYtNC40NjRWMjFINTkuOTg5eiBNNTEuODkyLDM5LjMyMWwtMC4zNDEsMC4yOTlDNTEuMDI2LDQwLjA4Myw1MC4xNTEsNDAuNTUsNDksNDF2LTQuNzY4DQoJYzEuMTg5LTAuNDE0LDIuMjAxLTAuODczLDMtMS4zNzZ2NC4xMzhDNTIsMzkuMDk3LDUxLjk2MiwzOS4yMDcsNTEuODkyLDM5LjMyMXogTTI5LjUyNiw0My45NjgNCgljLTAuMTQ2LDAuMDA0LTAuMjkzLDAuMDA2LTAuNDQsMC4wMDljLTAuMzU3LDAuMDA3LTAuNzIzLDAuMDA5LTEuMDg1LDAuMDEydi00Ljk5NWMwLjI3NS0wLjAwMywwLjU1LTAuMDA3LDAuODI1LTAuMDEyDQoJYzAuMDUzLTAuMDAxLDAuMTA2LTAuMDAyLDAuMTU5LTAuMDAzYzEuMDA3LTAuMDE5LDIuMDE0LTAuMDUsMy4wMTYtMC4wOTZ2NC45OTNjLTAuMjE0LDAuMDExLTAuNDI5LDAuMDIxLTAuNjQ2LDAuMDMNCglDMzAuNzUzLDQzLjkzMywzMC4xNDUsNDMuOTUzLDI5LjUyNiw0My45Njh6IE0yNS4xNTksNDMuOTgyYy0wLjQ1OC0wLjAwOC0wLjkxNC0wLjAxOS0xLjM2Ny0wLjAzMw0KCWMtMC4wNTYtMC4wMDItMC4xMTItMC4wMDQtMC4xNjgtMC4wMDZjLTAuNTQ1LTAuMDE4LTEuMDg2LTAuMDQxLTEuNjIzLTAuMDY3di00Ljk5MmMxLjAwMiwwLjA0NywyLjAwOSwwLjA3OCwzLjAxNiwwLjA5Ng0KCWMwLjA1MywwLjAwMSwwLjEwNiwwLjAwMiwwLjE1OCwwLjAwM2MwLjI3NSwwLjAwNSwwLjU1LDAuMDA5LDAuODI1LDAuMDEydjQuOTk4Yy0wLjE5NC0wLjAwMi0wLjM4OC0wLjAwMi0wLjU4MS0wLjAwNQ0KCUMyNS4zMzEsNDMuOTg2LDI1LjI0Niw0My45ODMsMjUuMTU5LDQzLjk4MnogTTcuMDk3LDQxLjcwMkM3LjA2NCw0MS42OTIsNy4wMzMsNDEuNjgzLDcsNDEuNjc0di00LjgzMQ0KCWMwLjkzNCwwLjI1MiwxLjkzOCwwLjQ4MiwzLDAuNjkxdjQuODgxYy0wLjkxOC0wLjE5NS0xLjc2NS0wLjQtMi41MzYtMC42MUM3LjM0Miw0MS43Nyw3LjIxNiw0MS43MzcsNy4wOTcsNDEuNzAyeiBNMjguMTc1LDQ5Ljk4Mw0KCWMwLjI3NSwwLjAwNSwwLjU1LDAuMDA5LDAuODI1LDAuMDEydjQuOTk5Yy0xLjM4Mi0wLjAxMy0yLjcxNi0wLjA1My00LTAuMTE2di00Ljk5M2MxLjAwMiwwLjA0NywyLjAwOSwwLjA3OCwzLjAxNiwwLjA5Ng0KCUMyOC4wNjksNDkuOTgxLDI4LjEyMiw0OS45ODIsMjguMTc1LDQ5Ljk4M3ogTTMxLjk4NCw0OS45OGMxLjAwNy0wLjAxOSwyLjAxNC0wLjA1LDMuMDE2LTAuMDk2djQuOTkzDQoJYy0xLjI4NCwwLjA2My0yLjYxOCwwLjEwMy00LDAuMTE2di00Ljk5OWMwLjI3NS0wLjAwMywwLjU1LTAuMDA3LDAuODI1LTAuMDEyQzMxLjg3OCw0OS45ODIsMzEuOTMxLDQ5Ljk4MSwzMS45ODQsNDkuOTh6DQoJIE00MCw0OS41Mjh2NC45NjZjLTAuOTYxLDAuMTAxLTEuOTYxLDAuMTktMywwLjI2M3YtNC45ODdDMzguMDE0LDQ5LjcwNCwzOS4wMTYsNDkuNjIzLDQwLDQ5LjUyOHogTTQyLDQ5LjMxMg0KCWMxLjAzMS0wLjEyNCwyLjAzMi0wLjI2NSwzLTAuNDIydjQuOTFjLTAuOTQyLDAuMTY2LTEuOTQzLDAuMzE5LTMsMC40NThWNDkuMzEyeiBNNDcsNDguNTMzYzEuMDYyLTAuMjA5LDIuMDY2LTAuNDM5LDMtMC42OTF2NC44MzENCgljLTAuODkxLDAuMjU3LTEuODk0LDAuNTA2LTMsMC43NDFWNDguNTMzeiBNMTMsNDguNTMzdjQuODgxYy0xLjEwNi0wLjIzNS0yLjEwOS0wLjQ4NC0zLTAuNzQxdi00LjgzMQ0KCUMxMC45MzQsNDguMDk0LDExLjkzOCw0OC4zMjUsMTMsNDguNTMzeiBNMTUsNDguODkxYzAuOTY4LDAuMTU3LDEuOTY5LDAuMjk4LDMsMC40MjJ2NC45NDZjLTEuMDU3LTAuMTM5LTIuMDU4LTAuMjkyLTMtMC40NTgNCglWNDguODkxeiBNMjAsNDkuNTI4YzAuOTg0LDAuMDk1LDEuOTg2LDAuMTc2LDMsMC4yNDN2NC45ODdjLTEuMDM5LTAuMDczLTIuMDM5LTAuMTYyLTMtMC4yNjNWNDkuNTI4eiBNMTcuNTE5LDQzLjU0OA0KCWMtMC4xMDItMC4wMS0wLjIwMy0wLjAyMS0wLjMwNC0wLjAzMWMtMC4wNzItMC4wMDctMC4xNDMtMC4wMTYtMC4yMTUtMC4wMjN2LTQuOTY1YzAuOTg0LDAuMDk1LDEuOTg2LDAuMTc2LDMsMC4yNDN2NC45ODMNCglDMTkuMTYsNDMuNjk1LDE4LjMzLDQzLjYyNywxNy41MTksNDMuNTQ4eiBNMTUsMzguMzEydjQuOTQ2Yy0xLjA1Ny0wLjEzOS0yLjA1OC0wLjI5Mi0zLTAuNDU4di00LjkxDQoJQzEyLjk2OCwzOC4wNDcsMTMuOTY5LDM4LjE4OSwxNSwzOC4zMTJ6IE0zNC42NjYsNDMuNzA4Yy0wLjIyLDAuMDE3LTAuNDQyLDAuMDM0LTAuNjY2LDAuMDV2LTQuOTg3DQoJYzEuMDE0LTAuMDY3LDIuMDE2LTAuMTQ3LDMtMC4yNDN2NC45NjZjLTAuNjE4LDAuMDY1LTEuMjUsMC4xMjYtMS44OTksMC4xNzlDMzQuOTU2LDQzLjY4NiwzNC44MTEsNDMuNjk3LDM0LjY2Niw0My43MDh6DQoJIE0zOSw0My4yNTh2LTQuOTQ2YzEuMDMxLTAuMTI0LDIuMDMyLTAuMjY1LDMtMC40MjJ2NC45MUM0MS4wNTgsNDIuOTY2LDQwLjA1Nyw0My4xMiwzOSw0My4yNTh6IE00NCwzNy41MzMNCgljMS4wNjItMC4yMDksMi4wNjYtMC40MzksMy0wLjY5MXY0LjgzMWMtMC44OTEsMC4yNTctMS44OTQsMC41MDYtMywwLjc0MVYzNy41MzN6IE0zMC4zMjUsMzIuOTY1DQoJYy0wLjc1Mi0wLjAxOS0xLjQ4Ny0wLjA0OC0yLjIwOS0wLjA4M2MtMC4wMzktMC4wMDItMC4wNzgtMC4wMDQtMC4xMTYtMC4wMDV2LTQuOTkzYzEuMDAyLDAuMDQ3LDIuMDA5LDAuMDc4LDMuMDE2LDAuMDk2DQoJYzAuMDUzLDAuMDAxLDAuMTA2LDAuMDAyLDAuMTU4LDAuMDAzYzAuMjc1LDAuMDA1LDAuNTUsMC4wMDksMC44MjUsMC4wMTJ2NC45OTNjLTAuNDg3LTAuMDA1LTAuOTc4LTAuMDA3LTEuNDUzLTAuMDE4DQoJQzMwLjQ3MywzMi45NjgsMzAuMzk4LDMyLjk2NywzMC4zMjUsMzIuOTY1eiBNNywxOC42NzR2LTQuODMxYzAuOTM0LDAuMjUyLDEuOTM4LDAuNDgyLDMsMC42OTF2NC44ODENCgljLTAuMTIzLTAuMDI2LTAuMjUtMC4wNTItMC4zNy0wLjA3OGMtMC41MzItMC4xMTctMS4wNTEtMC4yMzktMS41NDctMC4zNjhDNy43MDUsMTguODcyLDcuMzQ2LDE4Ljc3Myw3LDE4LjY3NHogTTI1LjE3NSwxNS45ODMNCgljMC4yNzUsMC4wMDUsMC41NSwwLjAwOSwwLjgyNSwwLjAxMnY0Ljk5M2MtMS4zNDYtMC4wMTMtMi42ODQtMC4wNDgtNC0wLjExNHYtNC45ODljMS4wMDIsMC4wNDcsMi4wMDksMC4wNzgsMy4wMTYsMC4wOTYNCglDMjUuMDY5LDE1Ljk4MSwyNS4xMjIsMTUuOTgyLDI1LjE3NSwxNS45ODN6IE0yOC45ODQsMTUuOThjMS4wMDctMC4wMTksMi4wMTQtMC4wNSwzLjAxNi0wLjA5NnY0Ljk4OQ0KCWMtMC4xNywwLjAwOC0wLjMzMywwLjAyLTAuNTA0LDAuMDI4Yy0wLjAxNCwwLjAwMS0wLjAyOCwwLjAwMS0wLjA0MywwLjAwMmMtMC42NzEsMC4wMy0xLjM1NSwwLjA1Mi0yLjA0OCwwLjA2OA0KCWMtMC4xMDgsMC4wMDMtMC4yMTYsMC4wMDQtMC4zMjQsMC4wMDdjLTAuMzU2LDAuMDA3LTAuNzIsMC4wMDgtMS4wODEsMC4wMTJ2LTQuOTk1YzAuMjc1LTAuMDAzLDAuNTUtMC4wMDcsMC44MjUtMC4wMTINCglDMjguODc4LDE1Ljk4MiwyOC45MzEsMTUuOTgxLDI4Ljk4NCwxNS45OHogTTUxLjc3MSwxNi40ODJsLTAuMDI4LTAuMDA2bC0wLjM2NCwwLjI4M0M1MC44NTEsMTcuMTcsNTAuMDQsMTcuNTg2LDQ5LDE3Ljk4OHYtNC43NTcNCgljMS4xODktMC40MTQsMi4yMDEtMC44NzMsMy0xLjM3NnY0LjEzOEM1MiwxNi4xNDUsNTEuOTIsMTYuMzA5LDUxLjc3MSwxNi40ODJ6IE0zOSwyMC4yNTJ2LTQuOTRjMS4wMzEtMC4xMjQsMi4wMzItMC4yNjUsMy0wLjQyMg0KCXY0LjkwMkM0MS4wNTIsMTkuOTYsNDAuMDU0LDIwLjExNCwzOSwyMC4yNTJ6IE00NCwxOS40MDd2LTQuODczYzEuMDYyLTAuMjA5LDIuMDY2LTAuNDM5LDMtMC42OTF2NC44Mg0KCUM0Ni4xMDQsMTguOTI0LDQ1LjA5NSwxOS4xNzMsNDQsMTkuNDA3eiBNMzcsMTUuNTI4djQuOTZjLTAuOTY2LDAuMTAyLTEuOTY2LDAuMTkxLTMsMC4yNjV2LTQuOTgyDQoJQzM1LjAxNCwxNS43MDQsMzYuMDE2LDE1LjYyMywzNywxNS41Mjh6IE0xNywyMC40OXYtNC45NjJjMC45ODQsMC4wOTUsMS45ODYsMC4xNzYsMywwLjI0M3Y0Ljk3OA0KCUMxOC45ODIsMjAuNjc2LDE3Ljk3OCwyMC41OTMsMTcsMjAuNDl6IE0xNSwxNS4zMTJ2NC45NDFjLTAuMTk4LTAuMDI2LTAuNDA0LTAuMDQ3LTAuNi0wLjA3NGMtMC4xMjgtMC4wMTgtMC4yNS0wLjAzNy0wLjM3Ni0wLjA1NQ0KCWMtMC41NzgtMC4wODMtMS4xNDMtMC4xNzItMS42OTctMC4yNjVDMTIuMjE2LDE5Ljg0LDEyLjEwOSwxOS44MiwxMiwxOS44MDF2LTQuOTFDMTIuOTY4LDE1LjA0NywxMy45NjksMTUuMTg5LDE1LDE1LjMxMnoNCgkgTTI1Ljc1MiwzMi43MzljLTAuMTM1LTAuMDEtMC4yNzEtMC4wMi0wLjQwNS0wLjAzYy0wLjY0LTAuMDUtMS4yNjUtMC4xMDUtMS44NzUtMC4xNjZjLTAuMTMxLTAuMDEzLTAuMjYyLTAuMDI3LTAuMzkyLTAuMDQNCglDMjMuMDUzLDMyLjUsMjMuMDI3LDMyLjQ5NiwyMywzMi40OTR2LTQuOTY2YzAuOTg0LDAuMDk1LDEuOTg2LDAuMTc2LDMsMC4yNDN2NC45ODRDMjUuOTE5LDMyLjc0OSwyNS44MzMsMzIuNzQ1LDI1Ljc1MiwzMi43Mzl6DQoJIE0xOS4xNDUsMzEuOTkyYy0wLjM5Ni0wLjA2My0wLjc2OC0wLjEzMS0xLjE0NS0wLjE5N3YtNC45MDRjMC45NjgsMC4xNTcsMS45NjksMC4yOTgsMywwLjQyMnY0Ljk0Ng0KCWMtMC42MTItMC4wODEtMS4yMTEtMC4xNjUtMS43ODYtMC4yNTVDMTkuMTkxLDMxLjk5OSwxOS4xNjgsMzEuOTk1LDE5LjE0NSwzMS45OTJ6IE0xNiwyNi41MzN2NC44NzMNCgljLTEuMTA1LTAuMjM3LTIuMTA3LTAuNDg5LTMtMC43NTF2LTQuODEzQzEzLjkzNCwyNi4wOTQsMTQuOTM4LDI2LjMyNSwxNiwyNi41MzN6IE0xMSwyNS4yMzF2NC43NTENCgljLTEuNTcyLTAuNjA3LTIuNTg2LTEuMjI3LTIuOTE2LTEuNzc5bC0wLjA2Ny0wLjExMkM4LjAxMSwyOC4wNiw4LjAwMSwyOC4wMjcsOCwyNy45OTZsMC00LjE0MQ0KCUM4Ljc5OSwyNC4zNTgsOS44MTEsMjQuODE3LDExLDI1LjIzMXogTTM0Ljk4NCwyNy45OGMxLjAwNy0wLjAxOSwyLjAxNC0wLjA1LDMuMDE2LTAuMDk2djQuOTg4Yy0xLjMxNCwwLjA2NS0yLjY1LDAuMTAxLTQsMC4xMTUNCgl2LTQuOTkyYzAuMjc1LTAuMDAzLDAuNTUtMC4wMDcsMC44MjUtMC4wMTJDMzQuODc4LDI3Ljk4MiwzNC45MzEsMjcuOTgxLDM0Ljk4NCwyNy45OHogTTQ3LjkwNywzMS44MTcNCgljLTAuNDM5LDAuMDc2LTAuODgyLDAuMTUxLTEuMzM3LDAuMjJjLTAuMjYxLDAuMDQtMC41MjgsMC4wNzgtMC43OTYsMC4xMTZjLTAuMjUzLDAuMDM2LTAuNTE2LDAuMDY3LTAuNzczLDAuMXYtNC45NDENCgljMS4wMzEtMC4xMjQsMi4wMzItMC4yNjUsMy0wLjQyMnY0LjkxQzQ3Ljk2OSwzMS44MDYsNDcuOTM4LDMxLjgxMiw0Ny45MDcsMzEuODE3eiBNNDEuMTM2LDMyLjY3MQ0KCWMtMC4zNzMsMC4wMzEtMC43NTgsMC4wNTEtMS4xMzYsMC4wNzh2LTQuOTc4YzEuMDE0LTAuMDY3LDIuMDE2LTAuMTQ3LDMtMC4yNDN2NC45NjFjLTAuNTgxLDAuMDYxLTEuMTYxLDAuMTIyLTEuNzU4LDAuMTcyDQoJQzQxLjIwNiwzMi42NjQsNDEuMTcyLDMyLjY2OCw0MS4xMzYsMzIuNjcxeiBNNTIuNTY0LDMwLjc5NmMtMC40OTgsMC4xMzktMS4wMjUsMC4yNjktMS41NjMsMC4zOTYNCgljLTAuMjQ5LDAuMDU4LTAuNTAzLDAuMTE2LTAuNzYzLDAuMTcyYy0wLjA3NywwLjAxNy0wLjE1OSwwLjAzMi0wLjIzNywwLjA0OXYtNC44NzljMS4wNjItMC4yMDksMi4wNjYtMC40MzksMy0wLjY5MXY0LjgzMQ0KCUM1Mi44NTcsMzAuNzE0LDUyLjcxMiwzMC43NTUsNTIuNTY0LDMwLjc5NnogTTU3Ljk4OSwyMS4wNjVjLTAuMDkyLDAuNjc5LTEuNjMxLDEuNTgyLTQuMzc4LDIuNDMxbDAsMA0KCWMtMy41MzgsMS4wOTMtOS4wNzQsMi4wOTQtMTYuMDksMi40MDRjLTAuMzU5LDAuMDE1LTAuNzE3LDAuMDMtMS4wODMsMC4wNDJjLTAuMjk5LDAuMDEtMC41OTksMC4wMTktMC45MDQsMC4wMjcNCglDMzQuNzA2LDI1Ljk4NywzMy44NjYsMjYsMzMsMjZzLTEuNzA2LTAuMDEzLTIuNTM0LTAuMDMyYy0wLjMwNC0wLjAwNy0wLjYwNC0wLjAxNy0wLjkwNC0wLjAyNw0KCWMtMC4zNjctMC4wMTEtMC43MjUtMC4wMjctMS4wODMtMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUzLTEuMzExLTE2LjA5LTIuNDA0bDAsMGMtMi43MjUtMC44NDItNC4yNjEtMS43MzgtNC4zNzUtMi40MTQNCgljMC4wMDUtMC4wMTksMC4wMDUtMC4wMzUsMC4wMTctMC4wNTljMC4wNjgsMC4wMTcsMC4xNDQsMC4wMzEsMC4yMTMsMC4wNDhjMC4zOTEsMC4wOTMsMC43OTIsMC4xODMsMS4yLDAuMjY5DQoJYzEuOTg3LDAuNDI4LDQuMTg5LDAuNzc5LDYuNTM1LDEuMDQ3YzAuMDA4LDAsMC4wMTQsMC4wMDQsMC4wMjEsMC4wMDRjMC4wMDIsMCwwLjAwNC0wLjAwMSwwLjAwNS0wLjAwMQ0KCWMxLjU5OCwwLjE4MiwzLjI1NiwwLjMyNSw0Ljk1OCwwLjQyNmMwLjAxMywwLDAuMDI0LDAuMDA3LDAuMDM3LDAuMDA3YzAuMDA3LDAsMC4wMTItMC4wMDQsMC4wMTktMC4wMDQNCgljMS4yMjUsMC4wNzIsMi40NjYsMC4xMjUsMy43MjIsMC4xNTNDMjUuNTEsMjIuOTksMjYuMjY1LDIzLDI3LDIzYzAuNTI1LDAsMS4wNjMtMC4wMDYsMS42MDYtMC4wMTYNCgljNy4yNjYtMC4xMTIsMTQtMC45NzYsMTguNjg2LTIuMzE1YzAuMjE2LTAuMDYxLDAuNDI3LTAuMTI0LDAuNjM1LTAuMTg3YzAuMTI3LTAuMDM5LDAuMjU3LTAuMDc3LDAuMzgtMC4xMTYNCgljMC4zNjItMC4xMTYsMC43MDktMC4yMzUsMS4wNDQtMC4zNTljMC4wNTgtMC4wMjIsMC4xMTMtMC4wNDQsMC4xNzEtMC4wNjZjMC4yODMtMC4xMDcsMC41NTUtMC4yMTgsMC44MTUtMC4zMzENCgljMC4wNzUtMC4wMzMsMC4xNTItMC4wNjUsMC4yMjUtMC4wOThjMC4yNzctMC4xMjUsMC41NDUtMC4yNTMsMC43OTMtMC4zODZjMC4xMTItMC4wNTksMC4yMDktMC4xMiwwLjMxNC0wLjE4DQoJYzAuMTItMC4wNjksMC4yNC0wLjEzOSwwLjM1MS0wLjIxYzAuMDYzLTAuMDQsMC4xMzgtMC4wNzgsMC4xOTgtMC4xMThDNTYuNjk1LDE5LjU4OSw1Ny44NzUsMjAuNjUxLDU3Ljk4OSwyMS4wNjV6IE0yNyw1DQoJYzE2LjQ4OSwwLDI0LjgyOSwyLjU5NiwyNC45ODUsNC4wODZjLTAuMTIxLDAuNjc2LTEuNjU2LDEuNTY5LTQuMzc0LDIuNDA5bDAsMGMtMy41MzgsMS4wOTMtOS4wNzQsMi4wOTQtMTYuMDksMi40MDQNCgljLTAuMzU5LDAuMDE1LTAuNzE3LDAuMDMtMS4wODMsMC4wNDJjLTAuMjk5LDAuMDEtMC41OTksMC4wMTktMC45MDQsMC4wMjdDMjguNzA2LDEzLjk4NywyNy44NjYsMTQsMjcsMTRzLTEuNzA2LTAuMDEzLTIuNTM0LTAuMDMyDQoJYy0wLjMwNC0wLjAwNy0wLjYwNC0wLjAxNy0wLjkwNC0wLjAyN2MtMC4zNjctMC4wMTEtMC43MjUtMC4wMjctMS4wODMtMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUzLTEuMzExLTE2LjA5LTIuNDA0bDAsMA0KCWMtMi43MTktMC44NC00LjI1My0xLjczMy00LjM3NC0yLjQwOUMyLjE3MSw3LjU5NiwxMC41MTEsNSwyNyw1eiBNMiwxNS45OTZsMC00LjE0MWMwLjc5OSwwLjUwMywxLjgxMSwwLjk2MiwzLDEuMzc2djQuNzg4DQoJQzMuMDU1LDE3LjI5LDIuMDAyLDE2LjU1OSwyLDE1Ljk5NnogTTYuODQ0LDI5LjgzNWMwLjAxNSwwLjAxNiwwLjAzOCwwLjAzLDAuMDUzLDAuMDQ2YzEuMzY5LDEuMzgyLDQuMjA0LDIuNDY4LDcuNzMzLDMuMjc4DQoJYzAuMDgxLDAuMDE5LDAuMTY3LDAuMDM3LDAuMjQ5LDAuMDU2YzAuMjU5LDAuMDU4LDAuNTIyLDAuMTE1LDAuNzg4LDAuMTdjMy4yNDEsMC42OSw3LjExLDEuMTg5LDExLjMyNSwxLjQzNg0KCWMwLjAwMywwLDAuMDA1LDAuMDAxLDAuMDA3LDAuMDAxYzAuMDAyLDAsMC4wMDMtMC4wMDEsMC4wMDQtMC4wMDFjMS4zNTQsMC4wNzksMi43MzksMC4xMzQsNC4xNTMsMC4xNTgNCglDMzEuNzgyLDM0Ljk5MiwzMi4zOTgsMzUsMzMsMzVjMC42OSwwLDEuMzk4LTAuMDA4LDIuMTE4LTAuMDI1YzEuMzA4LTAuMDI3LDIuNTk3LTAuMDgxLDMuODY4LTAuMTU1DQoJYzAuMDA1LDAsMC4wMDksMC4wMDMsMC4wMTQsMC4wMDNjMC4wMDksMCwwLjAxNi0wLjAwNSwwLjAyNS0wLjAwNWM0LjIyNi0wLjI0OSw4LjE5MS0wLjc1MywxMS41NDQtMS40NzgNCgljLTAuNzI2LDAuMzgtMS43MiwwLjc3My0yLjk1OCwxLjE1NmwwLDBjLTMuNzM1LDEuMTU0LTkuNywyLjIwNS0xNy4yODEsMi40NDljLTAuMjI1LDAuMDA3LTAuNDQ3LDAuMDE1LTAuNjc1LDAuMDIxDQoJYy0wLjI0NSwwLjAwNi0wLjQ5NCwwLjAxLTAuNzQzLDAuMDE1QzI4LjI4MywzNi45OTEsMjcuNjUsMzcsMjcsMzdjLTAuODY2LDAtMS43MDYtMC4wMTMtMi41MzQtMC4wMzINCgljLTAuMzA0LTAuMDA3LTAuNjA0LTAuMDE3LTAuOTA0LTAuMDI3Yy0wLjM2Ny0wLjAxMS0wLjcyNS0wLjAyNy0xLjA4My0wLjA0MmMtNy4wMTYtMC4zMS0xMi41NTMtMS4zMTEtMTYuMDktMi40MDRsMCwwDQoJYy0yLjc1LTAuODUtNC4yODktMS43NTQtNC4zNzgtMi40MzNDMi4xMjIsMzEuNjg2LDMuMTMzLDMwLjc0NSw2Ljg0NCwyOS44MzV6IE0yLDM4Ljk5NmwwLTQuMTQxYzAuNzk5LDAuNTAzLDEuODExLDAuOTYyLDMsMS4zNzYNCgl2NC43NjlsLTAuNTcxLTAuMjIyTDQuNDE3LDQwLjc5QzIuODQ3LDQwLjEzOSwyLjAwMiwzOS41LDIsMzguOTk2eiBNNSw0OS45OTZsMC00LjE0MWMwLjc5OSwwLjUwMywxLjgxMSwwLjk2MiwzLDEuMzc2djQuNzg4DQoJQzYuMDU1LDUxLjI5LDUuMDAyLDUwLjU1OSw1LDQ5Ljk5NnogTTUyLDUyLjAxOXYtNC43ODdjMS4xODktMC40MTQsMi4yMDEtMC44NzMsMy0xLjM3NnY0LjEzOA0KCUM1NC45OTksNTAuNTU3LDUzLjk0NSw1MS4yODksNTIsNTIuMDE5eiBNNTQuOTg3LDQzLjA3N2MtMC4xMDksMC42NzctMS42NDUsMS41NzUtNC4zNzYsMi40MTlsMCwwDQoJYy0zLjUzOCwxLjA5My05LjA3NCwyLjA5NC0xNi4wOSwyLjQwNGMtMC4zNTksMC4wMTUtMC43MTcsMC4wMy0xLjA4MywwLjA0MmMtMC4yOTksMC4wMS0wLjU5OSwwLjAxOS0wLjkwNCwwLjAyNw0KCUMzMS43MDYsNDcuOTg3LDMwLjg2Niw0OCwzMCw0OGMtMC44NjYsMC0xLjcwNy0wLjAxMy0yLjUzNi0wLjAzMmMtMC4zMDEtMC4wMDctMC41OTgtMC4wMTctMC44OTUtMC4wMjcNCgljLTAuMzY5LTAuMDEyLTAuNzI5LTAuMDI3LTEuMDktMC4wNDJjLTcuMDE2LTAuMzEtMTIuNTUyLTEuMzExLTE2LjA5LTIuNDA0bDAsMGMtMi42NDUtMC44MTctNC4xNzMtMS42ODUtNC4zNjUtMi4zNTUNCgljMC4yOTgsMC4xMDQsMC42MDcsMC4yMDUsMC45MjQsMC4zMDRjMC4wMzIsMC4wMSwwLjA2NCwwLjAyLDAuMDk2LDAuMDI5YzAuMjcsMC4wODMsMC41NDYsMC4xNjMsMC44MjksMC4yNDENCgljMC4xMDcsMC4wMywwLjIxNSwwLjA2LDAuMzI0LDAuMDg5YzAuMTYsMC4wNDMsMC4zMjQsMC4wODQsMC40ODgsMC4xMjZjMy42NDIsMC45MzMsOC4yOTEsMS41OTQsMTMuMzEsMS44OTENCgljMC4wMDIsMCwwLjAwMywwLjAwMSwwLjAwNSwwLjAwMWMwLjAwMSwwLDAuMDAyLTAuMDAxLDAuMDAzLTAuMDAxYzEuNTUsMC4wOTIsMy4xMzMsMC4xNDksNC43MzMsMC4xNjgNCglDMjYuMTYyLDQ1Ljk5NiwyNi41ODUsNDYsMjcsNDZjMC41NTEsMCwxLjExNS0wLjAwNywxLjY4Ni0wLjAxN2MxLjQ1OS0wLjAyNCwyLjg5OS0wLjA3OCw0LjMwNy0wLjE2Mg0KCWMwLjAwMywwLDAuMDA1LDAuMDAyLDAuMDA4LDAuMDAyYzAuMDA1LDAsMC4wMDgtMC4wMDMsMC4wMTMtMC4wMDNjMS43MTUtMC4xMDMsMy4zNzUtMC4yNSw0Ljk3LTAuNDMzDQoJYzAuMDA2LDAsMC4wMTEsMC4wMDMsMC4wMTcsMC4wMDNjMC4wMjIsMCwwLjA0LTAuMDExLDAuMDYyLTAuMDEzYzEuNzc2LTAuMjA1LDMuNDYtMC40NTcsNS4wMjMtMC43NQ0KCWMwLjMyMi0wLjA1OSwwLjYzOS0wLjEyLDAuOTUzLTAuMTgzYzAuMDctMC4wMTQsMC4xNC0wLjAyOCwwLjIxLTAuMDQzYzIuOTUzLTAuNjA2LDUuNTA5LTEuMzkxLDcuMjYzLTIuMzY0DQoJYzAuMDk2LTAuMDUyLDAuMTg2LTAuMTA2LDAuMjc3LTAuMTU5YzAuMTExLTAuMDY2LDAuMjE3LTAuMTMzLDAuMzItMC4yMDFjMC4wOTYtMC4wNjIsMC4yMDctMC4xMjIsMC4yOTUtMC4xODUNCglDNTQuMzc4LDQyLjE5Niw1NC45MjIsNDIuODI2LDU0Ljk4Nyw0My4wNzd6IE01NSwzMC4wMTl2LTQuNzg3YzEuMTg5LTAuNDE0LDIuMjAxLTAuODczLDMtMS4zNzZ2NC4xMzgNCglDNTcuOTk5LDI4LjU1Nyw1Ni45NDUsMjkuMjg5LDU1LDMwLjAxOXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

}


