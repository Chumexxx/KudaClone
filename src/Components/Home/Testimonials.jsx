import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";



const Testimonials = () => {

    const testimonialsArray = [
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            image:<IoPersonSharp size={40}/>,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Save money automatically any time you spend"
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            image:<IoPersonSharp size={40}/>,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Save money automatically any time you spend"
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            image:<IoPersonSharp size={40}/>,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Save money automatically any time you spend"
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Order a Kuda card on the app with pickup and delivery options."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            image:<IoPersonSharp size={40}/>,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            image: <IoPersonSharp size={40}/>,
            dsc: "Save money automatically any time you spend"
        },
    ]
    return(
        <Container>

            <TextDiv>
                <h1>Don't just take our word for it</h1>
            </TextDiv>
            
            <TestiDiv>
                {testimonialsArray.map((infoo, i)=>(
                <Card key={i}>
                
                    <InfoDesc>
                        <p>{infoo.dsc} </p>
                    </InfoDesc>

                    <InfoImage>
                        {infoo.image}
                    </InfoImage>
               
                </Card>
                ))}
            </TestiDiv>

            <CompaniesDiv>
                <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA4MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDBWMTMuMzMzM0gyNi42NjY3VjQwSDEzLjMzMzNWMTMuMzMzM0gwVjBINDBaIiBmaWxsPSIjMEE5RTAxIi8+CjxwYXRoIGQ9Ik04MCAwSDUzLjMzMzNWMTMuMzMzM0g4MFYwWiIgZmlsbD0iIzBBOUUwMSIvPgo8cGF0aCBkPSJNODAgMjYuNjY2OFY0MC4wMDAySDQwVjEzLjMzMzVINTMuMzMzM1YyNi42NjY4SDgwWiIgZmlsbD0iIzBBOUUwMSIvPgo8L3N2Zz4K" alt="" /></a>
                <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYzIiB3aWR0aD0iMTAyIgoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxtYXNrIGlkPSJhIiBmaWxsPSIjZmZmIj4KCQk8cGF0aCBkPSJNMCAuNDQ3aDEwMS41NDJWNjNIMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgoJPC9tYXNrPgoJPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgoJCTxwYXRoIGQ9Ik0wIC40NDdoMTAxLjU0MlY2M0gweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cgk8L21hc2s+Cgk8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgoJCTxwYXRoIGQ9Ik04MS42MTggNTQuMjVsLS4wMzEuMDI0LS4yNzYtLjMzYy01LjY5MyA0LjY4MS0xMi45MjQgNy4yMTQtMjAuMzg2IDcuMjE0LTguNTM5IDAtMTYuNTQtMy4yMjQtMjIuNTQtOS4xMzQtNS45OTktNS44MzItOS4zMDctMTMuNjYxLTkuMzA3LTIxLjk1IDAtNi4zNyAxLjkyMy0xMi41ODggNS42OTItMTcuODA3IDMuNjkzLTUuMTQyIDguNzctOC45OCAxNC43Ny0xMS4yMDZsLS4yMy0uNjE0QzQzLjIzMiAyLjc1IDM4LjAwMiA2LjY2NCAzNC4zMDkgMTEuODg0Yy0zLjg0NiA1LjM3Mi01LjkyMyAxMS42NjYtNS45MjMgMTguMTkgMCA4LjQ0MiAzLjM4NSAxNi40MjQgOS41MzkgMjIuNDFhMzIuOTUgMzIuOTUgMCAwMDEuNzkzIDEuNjFsLS43OTQuOTI0QzQ1LjAwMSA2MC4xNiA1Mi44NDggNjMgNjAuOTI1IDYzYzcuOTI0IDAgMTUuNTM5LTIuNzYzIDIxLjYxNy03LjY3NXoiIGZpbGw9IiMwMDRiODYiIG1hc2s9InVybCgjYSkiLz4KCQk8ZyBmaWxsPSIjMTQxNDE0Ij4KCQkJPHBhdGggZD0iTTM1LjA3OCAxMC44ODZhNS4zMjMgNS4zMjMgMCAwMS0uMjMtMS41MzVjMC0yLjMwMyAxLjUzOC00LjM3NiA0LjMwNy00LjM3Ni42MTYgMCAxLjE1NC4wNzcgMS42MTYuMjMuNDYxLS4zODMgMS0uNzY3IDEuNTM4LTEuMDc0LS45MjMtLjUzNy0yLS44NDMtMy4xNTQtLjg0My0zLjM4NSAwLTYuMjMgMi42ODYtNi4yMyA2LjA2MyAwIDEuMTUxLjM4NCAyLjMwMi45MjIgMy4yMjMuMTU0LS4yMy4zMDgtLjQ2LjQ2MS0uNjE0LjIzMi0uMzg0LjU0LS43NjcuNzctMS4wNzRNNDMuMzg2IDQuODk5Yy0uNTM4LjMwNy0xIC42MTQtMS40NjEuOTk4IDEgLjc2NyAxLjUzOCAyLjA3MiAxLjUzOCAzLjQ1NCAwIDIuMzAyLTEuNjkyIDQuMjk3LTQuMzA4IDQuMjk3LTEuNDYyIDAtMi42MTUtLjYxNC0zLjM4NC0xLjYxMS0uMTU0LjIzLS4zMDguMzg0LS40NjIuNjE0LS4yMy4zMDctLjQ2MS42MTQtLjYxNi45MmE2LjQ4OCA2LjQ4OCAwIDAwNC40NjIgMS43NjdjMy40NjIgMCA2LjIzMS0yLjYxIDYuMjMxLTUuOTg3IDAtMS43NjYtLjc2OS0zLjM3Ny0yLTQuNDUyTTMyLjM4NiAyNS4wMDhjMCAxLjg0Mi0xLjA3NyAzLjQ1NC0yLjY5MiA0LjA2OHYxLjg0MmMyLjYxNS0uNjkgNC42MTQtMi45OTMgNC42MTQtNS45MSAwLTIuMDcyLTEuMTUzLTMuOTE0LTIuODQ1LTUuMDY2LS4yMzEuNjE0LS4zODUgMS4xNTItLjYxNiAxLjY4OSAxIC44NDQgMS41MzkgMi4wNzMgMS41MzkgMy4zNzdNMjguNDYyIDI5LjM4M2gtLjM4NGMtMi42MTUgMC00LjM4NS0xLjk5Ni00LjM4NS00LjM3NSAwLTIuMjI2IDEuNTM5LTQuMjk4IDQuMzg1LTQuMjk4LjYxNSAwIDEuMjMuMDc2IDEuNjkyLjMwNy4xNTQtLjUzOC4zMDgtMS4wNzUuNTM5LTEuNjEyYTcuMTU3IDcuMTU3IDAgMDAtMi4yMzEtLjM4NGMtMy40NjIgMC02LjIzMSAyLjY4Ny02LjIzMSA1Ljk4NyAwIDMuNDU0IDIuNzcgNi4wNjMgNi4yMzEgNi4wNjNoLjM4NGMwLS4zMDYtLjA3Ny0uNjktLjA3Ny0uOTk3IDAtLjIzLjA3Ny0uNDYuMDc3LS42OTFNMzIuNTQgMzYuNTJjMi43NjkgMCA0LjMwNyAyLjA3MyA0LjMwNyA0LjI5OSAwIDEuOTk1LTEuMjMgMy43Ni0zLjE1NCA0LjIyMS4zMDguNTM3LjYxNi45OTguOTIzIDEuNTM1IDIuMzg1LS44NDQgNC4xNTUtMi45OTMgNC4xNTUtNS43NTYgMC0zLjMtMi44NDctNS45ODctNi4yMzEtNS45ODctLjg0NiAwLTEuNjkzLjE1NC0yLjM4NS40Ni4wNzcuNTM4LjE1NCAxLjE1Mi4zMDggMS42OS42MTUtLjMwOCAxLjMwNy0uNDYxIDIuMDc3LS40NjFNMjguMjMxIDQwLjgxOGMwLTEuMTUuMzg2LTIuMjI1IDEuMTU0LTMuMDctLjE1NC0uNjEzLS4zMDctMS4yMjctLjM4NC0xLjg0MS0xLjYxNSAxLjA3NC0yLjY5MiAyLjkxNi0yLjY5MiA0LjkxMSAwIDMuNDU1IDIuNzY5IDYuMDY0IDYuMjMgNi4wNjQuMjMxIDAgLjU0IDAgLjc3LS4wNzYtLjMwOC0uNTM4LS42OTItMS4wNzUtMS0xLjYxMi0yLjQ2Mi0uMTU0LTQuMDc4LTEuOTk2LTQuMDc4LTQuMzc2TTYyLjc3MSAzNS4wNjJ2Ni45ODVjMCAxLjYxMi0uNTM4IDMuMTQ3LTIuNjE1IDMuMTQ3cy0yLjYxNi0xLjUzNS0yLjYxNi0zLjE0N3YtNi45ODVoLTEuOTIzdjcuMzY5YzAgMi41MzIgMS42MTYgNC40NTEgNC41NCA0LjQ1MXM0LjUzNy0xLjkxOSA0LjUzNy00LjQ1MXYtNy4zNjl6TTY0LjMxIDEzLjQ5NWg1LjIzMXYxLjYxMmgtNy4xNTVWMy41MTdoMS45MjR6TTAgMTkuMjUyaDYuNzd2MS42ODdIMS45MjJ2Mi43NjRoNC43N3YxLjY4OWgtNC43N3YzLjc2aDQuODQ2djEuNjg5SDB6TTM4LjIzMiAxOC42MzhsOCA4LjIxMnYtNy41OThoMS45MjN2MTIuMDVsLTgtOC4wNnY3LjU5OWgtMS45MjN6Ii8+CgkJCTxwYXRoIGQ9Ik04NS45MjYgMTkuMjUyaDEuOTI0VjMwLjg0aC0xLjkyNHpNMTguNjkzIDM2Ljc1djIuNzY0aDQuMTUzdjEuNjEyaC00LjE1M3Y1LjUyNkgxNi43N3YtMTEuNTloNi4yMzF2MS42ODl6TTI2LjM4NiAxMC43MzJoLjA3N2wxLjg0NS03LjIxNGgxLjg0N2wtMy4yMzEgMTIuMDUtNC4wNzctOC42NzMtNC4wNzcgOC42NzMtMy4zMDctMTIuMDVoMS45MjJsMS44NDcgNy4yMTQgMy42MTUtNy40NDV6TTcwLjg0OSAyMy42MjZoLS4wNzdsLTEuODQ3IDcuMjE1SDY3LjA4bDMuMjMxLTEyLjA1IDQuMDc3IDguNzUgNC4wNzgtOC43NSAzLjMwNyAxMi4wNUg3OS44NWwtMS44NDctNy4yMTVoLS4wNzdsLTMuNTM4IDcuNTIyek03MS44NDkgMzkuNDM3bC0xLjg0NyA3LjIxNUg2OC4wOGwzLjIzMS0xMi4wNSA0LjE1NCA4LjY3MyA0LjA3OC04LjY3NCAzLjIzIDEyLjA1aC0xLjkyM2wtMS44NDctNy4yMTQtMy41MzggNy40NDV6TTQ2LjAwMiAzNS4wNjJjMS4wNzYgMCAyLjMwNyAwIDMuMjMuNTM4IDEgLjUzNyAxLjYxNiAxLjY4OCAxLjYxNiAyLjc2MyAwIDEuNjg4LTEuMTU0IDMuMDctMi44NDcgMy4yMjNsMy42OTMgNS4wNjZINDkuNTRMNDYuMDggNDEuNzRINDQuNzd2NC45MTJoLTEuOTIzdi0xMS41OXptLTEuMjMxIDUuMTQzaC44NDZjMS41MzkgMCAzLjM4NS4wNzYgMy4zODUtMS43NjZzLTEuOTI0LTEuNzY1LTMuNDYyLTEuNzY1aC0uNzd6TTUyLjU0IDMuNTE3YzEuMDc3IDAgMi4zMDggMCAzLjIzLjUzOCAxLjAwMS41MzcgMS41NCAxLjY4OCAxLjU0IDIuNzYzIDAgMS42ODktMS4wNzcgMy4wNy0yLjg0NiAzLjIyM2wzLjc2OSA1LjA2NmgtMi4xNTRsLTMuNTM5LTQuOTEyaC0xLjIzdjQuOTEyaC0xLjkyNFYzLjUxN3pNNTEuMzEgOC42NmguODQ2YzEuNTM4IDAgMy4zMDcuMDc3IDMuMzA3LTEuNzY2IDAtMS44NDItMS45MjMtMS43NjQtMy4zODQtMS43NjRoLS43N3pNNzQuODQ5IDEzLjQ5NWgxLjA3N2MyLjUzOCAwIDQuOTIzLS45MjEgNC45MjMtNC4yMjEgMC0zLjM3Ny0yLjM4NS00LjE0NS00LjkyMy00LjE0NWgtMS4wNzd6bS0xLjkyNC05Ljk3N2gzLjE1NGMzLjY5MyAwIDYuNjkzIDEuNzY0IDYuNjkzIDUuNzU2IDAgMy45OS0yLjkyMyA1LjgzMy02LjY5MyA1LjgzM2gtMy4xNTR6TTEwMC41NDIgMjguODQ2Yy0uNjE2LjM4My0xLjMwOC41MzctMi4xNTQuNTM3LTIuNTM5IDAtNC4zMDgtMS45Mi00LjMwOC00LjI5OSAwLTIuMzAyIDEuNTM5LTQuMzc0IDQuMzA4LTQuMzc0Ljg0NiAwIDEuNTM4LjE1MyAyLjE1NC40NmwuOTIzLTEuMzgxYTYuNTE1IDYuNTE1IDAgMDAtMy4wNzctLjc2OGMtMy4zODUgMC02LjIzIDIuNjg3LTYuMjMgNi4wNjMgMCAzLjM3OCAyLjg0NSA1Ljk4NyA2LjIzIDUuOTg3IDEuMTU0IDAgMi4yMy0uMjMgMy4xNTQtLjc2N3pNMTguNzcgMjguODQ2Yy0uNjE2LjM4My0xLjMwOC41MzctMi4wNzcuNTM3LTIuNjE2IDAtNC4zODUtMS45Mi00LjM4NS00LjI5OSAwLTIuMzAyIDEuNTM4LTQuMzc0IDQuMzg1LTQuMzc0Ljc2OSAwIDEuNDYxLjE1MyAyLjA3Ny40NmwxLTEuMzgxYy0uOTIzLS40Ni0yLS43NjgtMy4wNzctLjc2OC0zLjQ2MiAwLTYuMjMgMi42ODctNi4yMyA2LjA2MyAwIDMuMzc4IDIuNzY4IDUuOTg3IDYuMjMgNS45ODcgMS4wNzYgMCAyLjE1NC0uMjMgMy4wNzctLjc2N3pNNjIuNjk0IDI1LjA4NWMwLTIuMzAzLTEuNTM4LTQuMzc1LTQuMzA3LTQuMzc1LTIuODQ2IDAtNC4zODUgMi4wNzItNC4zODUgNC4zNzUgMCAyLjM3OSAxLjc2OSA0LjI5NyA0LjM4NSA0LjI5NyAyLjUzOCAwIDQuMzA3LTEuOTE4IDQuMzA3LTQuMjk3bTEuOTI0IDBjMCAzLjM3Ny0yLjg0NyA1Ljk4Ny02LjIzMSA1Ljk4Ny0zLjQ2MiAwLTYuMjMxLTIuNjEtNi4yMzEtNS45ODdzMi43Ny02LjA2NCA2LjIzLTYuMDY0YzMuMzg1IDAgNi4yMzIgMi42ODYgNi4yMzIgNi4wNjQiIG1hc2s9InVybCgjYikiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=" alt="" /></a>
                <a href="#"><img src="https://www.kuda.com/static/fintech-0a9e5796db280b81800496a6c3c23c6d.svg" alt="" /></a>
                <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjg1IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAwIj4KPHBhdGggZD0iTTU0MS44MTcgMTg0LjIwMWMwIDMwLjk3MS0zOC41NDEgMjkuMTMzLTM4LjU0MSAyOS4xMzNoLTM4LjU0VjE1Ny4zNzFoMzguNTRDNTQyLjkzOSAxNTcuMTA1IDU0MS44MTcgMTg0LjIwMSA1NDEuODE3IDE4NC4yMDFNNDY0LjczNiA3Mi4wMjNoMjkuMzY4YzMwLjQ5NiAxLjYxMSAyOS4zNDUgMjQuMzE2IDI5LjM0NSAyNC4zMTZjMCAyOC4yMTYtMzMuNzIxIDI4LjY3Ni0zMy43MjEgMjguNjc2SDQ2NC43MzZWNzIuMDIzek01MzQuNjg4IDEzNi4wMmMwIDAgMjYuMzgtMTEuMjQxIDI2LjE0NS00MS4wNTdjMCAwIDQuMDEyLTQ4Ljg2NC02MC43MjktNTQuODI0SDQyOC4yNjZ2MjA0Ljg0OWg4Mi4zNDRjMCAwIDY4LjgwMiAwLjIwNSA2OC44MDItNTcuNzk5QzU3OS40MTEgMTg3LjE4OSA1ODEuMDM4IDE0Ny43MTYgNTM0LjY4OCAxMzYuMDJNMzQ4Ljc3MyAwaDMwMi40NTNWMjg1LjAxM0gzNDguNzczVjB6TTE5My4wNDEgMTg0LjIwMWMwIDMwLjk3MS0zOC41NDEgMjkuMTMzLTM4LjU0MSAyOS4xMzNoLTM4LjU0M1YxNTcuMzcxaDM4LjU0M0MxOTQuMTY2IDE1Ny4xMDUgMTkzLjA0MSAxODQuMjAxIDE5My4wNDEgMTg0LjIwMU0xMTUuOTU3IDcyLjAyM2gyOS4zNzRjMzAuNDk3IDEuNjExIDI5LjM0MyAyNC4zMTYgMjkuMzQzIDI0LjMxNmMwIDI4LjIxNi0zMy43MTkgMjguNjc2LTMzLjcxOSAyOC42NzZoLTI0Ljk5OFY3Mi4wMjN6TTE4NS45MTUgMTM2LjAyYzAgMCAyNi4zODQtMTEuMjQxIDI2LjE0Ny00MS4wNTdjMCAwIDQuMDA5LTQ4Ljg2NC02MC43MzItNTQuODI0aC03MS44NDF2MjA0Ljg0OWg4Mi4zNDljMCAwIDY4LjgwMSAwLjIwNSA2OC44MDEtNTcuNzk5QzIzMC42MzkgMTg3LjE4OSAyMzIuMjYgMTQ3LjcxNiAxODUuOTE1IDEzNi4wMk0wIDBoMzAyLjQ1M1YyODUuMDEzSDBWMHpNOTM4LjMwMSA1NC44MjV2MzcuODQ2YzAgMC0zNi45NDItMjIuNzAyLTc3Ljc2NC0yMy4xNTljMCAwLTc2LjE2MS0xLjQ5NS03OS41OTQgNzMuMDA1YzAgMC0yLjc1MSA2OC41MTMgNzguNjc2IDcyLjQxN2MwIDAgMzQuMTY1IDQuMTE1IDgwLjUxNC0yNS40NDF2MzkuMTk1YzAgMC02Mi4xNzMgMzYuOTM5LTEzNC4xOTcgOC40ODhjMCAwLTYwLjU0NS0yMi4xMDktNjIuODUxLTk0LjY1OWMwIDAtMi41MTgtNzQuNjE5IDc4LjIzLTk5LjM4OWMwIDAgMjEuNTYzLTguMjU1IDYwLjMxMy00LjU4NkM4ODEuNjI5IDM4LjU0MSA5MDQuNzg5IDQwLjgzMiA5MzguMzAxIDU0LjgyNU02OTcuNTQ3IDI4NS4wMTNIMTAwMFYwSDY5Ny41NDdWMjg1LjAxM3oiLz48L3N2Zz4K" alt="" /></a>
                <a href="#"><img src="https://www.kuda.com/static/cnbc-45f58c789bba9e75d11c83bb03c5d3ff.svg" alt="" /></a>
                <a href="#"><img src="https://www.kuda.com/static/euromoney-2f7f12d4caef10de0f43b424ad5bd0a2.svg" alt="" /></a>
            </CompaniesDiv>

            <Partners>
                <h1>Our Partners</h1>

                <PartnersImage>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTEwIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNi44MzQ2NCAzMS45Nzc3TDAuMjA3MDMxIDAuMDIzNDM3NUg0LjkwMTU5TDkuODI2MjggMjUuNzE0OUwyMS4wNTY0IDAuMDIzNDM3NUgyNi4yMTEyTDExLjM5MTEgMzEuOTc3N0g2LjgzNDY0WiIgZmlsbD0iI0I3QjdCNiIvPgo8cGF0aCBkPSJNMzIuNjc1OSA3LjcyNjNMMjUuOTEwMiAyMi42NTJIMzUuMTM4MkwzMi42NzU5IDcuNzI2M1pNMjQuMDIzMiAyNi44MTJMMjEuNjc1OSAzMS45Nzc3SDE3LjAyNzNMMzEuNjg2MyAwLjAyMzQzNzVIMzUuNTk4NUw0MS4xNjc1IDMxLjk3NzdIMzYuNzAzMUwzNS44Mjg2IDI2LjgxMkgyNC4wMjMyWiIgZmlsbD0iI0I3QjdCNiIvPgo8cGF0aCBkPSJNNTcuMzY5IDI3LjcyNjNWMzEuOTc3N0g0My45Mjk3VjAuMDIzNDM3NUg0OC40ODYyVjI3LjcyNjNINTcuMzY5WiIgZmlsbD0iI0I3QjdCNiIvPgo8cGF0aCBkPSJNNzUuMTM2OCA3LjcyNjNMNjguMzcxMSAyMi42NTJINzcuNTk5Mkw3NS4xMzY4IDcuNzI2M1pNNjYuNDg0MSAyNi44MTJMNjQuMTM2OCAzMS45Nzc3SDU5LjQ4ODNMNzQuMTQ3MyAwLjAyMzQzNzVINzguMDU5NEw4My42Mjg0IDMxLjk3NzdINzkuMTY0TDc4LjI4OTUgMjYuODEySDY2LjQ4NDFaIiBmaWxsPSIjQjdCN0I2Ii8+CjxwYXRoIGQ9Ik05Ni4wMzI5IDE0Ljk5NDlDMTAwLjcyNyAxNC45OTQ5IDEwMi40NzYgMTIuNjE3NyAxMDIuNDc2IDkuNjAwNThDMTAyLjQ3NiA2LjU4MzQ0IDEwMC43MjcgNC4yNTIwMSA5Ni4wMzI5IDQuMjUyMDFIOTAuOTQ3MVYxNC45NzJMOTYuMDMyOSAxNC45OTQ5Wk05My43MzE2IDE5LjI0NjNIOTAuOTQ3MVYzMS45Nzc3SDg2LjM5MDZWMC4wMjM0Mzc1SDk2Ljc2OTNDMTAzLjQ4OSAwLjAyMzQzNzUgMTA3LjA1NiA0LjQxMjAxIDEwNy4wNTYgOS42MDA1OEMxMDcuMDU2IDE0LjIxNzcgMTA0LjI0OCAxOC4yMTc3IDk4LjkwOTQgMTkuMDQwNkwxMDkuOTc4IDMxLjk1NDlIMTA0LjQ1NUw5My43MzE2IDE5LjI0NjNaIiBmaWxsPSIjQjdCN0I2Ii8+Cjwvc3ZnPgo=" alt="" />
                    <img src="https://www.kuda.com/static/entreeCapital-af919d4ffd7d5cef28085ee2a9085519.svg" alt="" />
                    <img src="https://www.kuda.com/static/sbiHoldings-32de2b58b5a5d5a40696e17db098a44d.svg" alt="" />
                    <img src="https://www.kuda.com/static/target-global-d0857fbce3223960d649682020537e20.svg" alt="" />
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA5MiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwX1Zpc2FDbGlwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjYuNDIyMSAyNy43OTk2TDM0LjYzNDQgMS4yOTgzNEg0MS45NjE4TDMzLjc0ODggMjcuNzk5NkgyNi40MjIxWiIgZmlsbD0iIzFBMUY3MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjE0NjQgMS4zMDU2NkwxNi41NTQ4IDEyLjUzOTNDMTQuODc2OCAxNS40ODIxIDEzLjg5NTkgMTYuOTY4NCAxMy40MjQ0IDE4LjgyNzJIMTMuMzIzOEMxMy40NDA4IDE2LjQ3MDUgMTMuMTA0OSAxMy41NzY2IDEzLjA3MzYgMTEuOTQwOUwxMi4zNDUyIDEuMzA1NjZIMC4wMTExMzc5TC0wLjExNTQ3OSAyLjAxODU3QzMuMDUyOTQgMi4wMTg1NyA0LjkzMjA5IDMuNTc2MzEgNS40NDg5OCA2Ljc2Mzk2TDcuODUzMjMgMjcuNzk5N0gxNS40NDQzTDMwLjc5NDEgMS4zMDU2NkgyMy4xNDY0WiIgZmlsbD0iIzFBMUY3MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgwLjEyODcgMjcuNzk5Nkw3OS45MjY5IDIzLjg1ODNMNzAuNzc3NyAyMy44NTFMNjguOTA2IDI3Ljc5OTZINjAuOTUwN0w3NS4zNzU0IDEuMzQ4NjNIODUuMTM5OEw4Ny41ODI4IDI3Ljc5OTZIODAuMTI4N1pNNzkuMjg4NiAxMi4xNjY4Qzc5LjIwNjcgMTAuMjA4OSA3OS4xMzg5IDcuNTUwNDQgNzkuMjc1MiA1Ljk0MTY3SDc5LjE2NzJDNzguNzIxMSA3LjI1NzQxIDc2LjgwNTQgMTEuMjA3NSA3NS45NjMgMTMuMTUwOUw3My4yMzcgMTguOTU5OEg3OS42NjFMNzkuMjg4NiAxMi4xNjY4WiIgZmlsbD0iIzFBMUY3MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ5LjY1NDEgMjguNTUyMUM0NC40ODA3IDI4LjU1MjEgNDEuMDQ3OCAyNi45NDYyIDM4LjU5NzQgMjUuNTE0Nkw0Mi4wODc2IDIwLjI5NzZDNDQuMjg3NyAyMS41MDI1IDQ2LjAxNTcgMjIuODkxOCA0OS45OTA4IDIyLjg5MThDNTEuMjY4OCAyMi44OTE4IDUyLjUgMjIuNTY2NyA1My4yMDAxIDIxLjM4MTVDNTQuMjE5IDE5LjY1NzYgNTIuOTY0OCAxOC43MzAzIDUwLjEwMjUgMTcuMTQ0Mkw0OC42ODk2IDE2LjI0NDdDNDQuNDQ1NiAxMy40MDY5IDQyLjYxMDQgMTAuNzEyIDQ0LjYwOCA2LjAwNzQ0QzQ1Ljg4NjEgMi45OTc2NSA0OS4yNTcxIDAuNzE2Nzk3IDU0LjgxODYgMC43MTY3OTdDNTguNjUzNiAwLjcxNjc5NyA2Mi4yNDk2IDIuMzQwMTUgNjQuMzQ1NCAzLjkyNzA1TDYwLjMzMjQgOC41MzI0OEM1OC4yODcyIDYuOTE0MjQgNTYuNTkzNSA2LjA5NTY0IDU0LjY1MzIgNi4wOTU2NEM1My4xMDcgNi4wOTU2NCA1MS45MzE3IDYuNjc5NTIgNTEuNTI2NSA3LjQ2Njc3QzUwLjc2MzEgOC45NDY1MiA1MS43NzMxIDkuOTU1MzcgNTQuMDAzIDExLjMwOTdMNTUuNjg0MSAxMi4zNTY1QzYwLjgzNTkgMTUuNTM2OSA2Mi4wNjM0IDE4Ljg3MSA2MC43NzE5IDIxLjk4OEM1OC41NTA4IDI3LjM1NDQgNTQuMjAyNiAyOC41NTIxIDQ5LjY1NDEgMjguNTUyMVoiIGZpbGw9IiMxQTFGNzEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04OS43NjI4IDQuODlIODkuNDQ2MlYyLjk5OTEzSDkwLjE3OTFDOTAuNjQ1NCAyLjk5OTEzIDkwLjg4MzcgMy4xNTg3NyA5MC44ODM3IDMuNTQyOTJDOTAuODgzNyAzLjg4NTUyIDkwLjY2OTIgNC4wMjY5NCA5MC4zNzk1IDQuMDU5MDFMOTAuOTIwMiA0Ljg5SDkwLjU2MTJMOTAuMDYyMiA0LjA4MTYxSDg5Ljc2MjhWNC44OVpNOTAuMTE4MSAzLjgxNjI3QzkwLjM1NjQgMy44MTYyNyA5MC41NjU3IDMuNzkzNjggOTAuNTY1NyAzLjUxOTZDOTAuNTY1NyAzLjI5MTQ0IDkwLjMzNyAzLjI2Mzc0IDkwLjE0NjQgMy4yNjM3NEg4OS43NjI4VjMuODE2MjdIOTAuMTE4MVpNOTAuMTA4NCA1LjYyMTEzQzg5LjEwNTkgNS42MjExMyA4OC4zOTE2IDQuODg1NjMgODguMzkxNiAzLjkxMjVDODguMzkxNiAyLjg4NTQyIDg5LjE4NDggMi4yMDQ1OSA5MC4xMDg0IDIuMjA0NTlDOTEuMDIzIDIuMjA0NTkgOTEuODE2MiAyLjg4NTQyIDkxLjgxNjIgMy45MTI1QzkxLjgxNjIgNC45NDAzIDkxLjAyMyA1LjYyMTEzIDkwLjEwODQgNS42MjExM1pNOTAuMTA4NCAyLjUwMTI3Qzg5LjM1MjQgMi41MDEyNyA4OC43NjQ3IDMuMDgxNTEgODguNzY0NyAzLjkxMjVDODguNzY0NyA0LjY4ODgyIDg5LjI3ODcgNS4zMjM3MiA5MC4xMDg0IDUuMzIzNzJDOTAuODU1NCA1LjMyMzcyIDkxLjQ0MzEgNC43NDg1OSA5MS40NDMxIDMuOTEyNUM5MS40NDMxIDMuMDgxNTEgOTAuODU1NCAyLjUwMTI3IDkwLjEwODQgMi41MDEyN1oiIGZpbGw9IiMxQTFGNzEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF9WaXNhQ2xpcCI+CjxyZWN0IHk9IjAuNjAyNTM5IiB3aWR0aD0iOTEuODk3NCIgaGVpZ2h0PSIyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="" />
                </PartnersImage>
            </Partners>
       

        </Container>
    )
}

export default Testimonials;

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
`

const TextDiv = styled.div`
    text-align: center;

    h1{
        color: purple;
    }
`

const TestiDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    gap: 20px;
`

const Card = styled.div`
    height: 250px;
    min-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 15px;
    animation: scroll 10s linear infinite;


    @keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
    }
`

const InfoImage = styled.div`
    
`

const InfoDesc = styled.div`
    
`

const CompaniesDiv = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 100px;
    }

    @media (max-width: 800px) {
        flex-wrap: wrap;
}
`

const Partners = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fdf9f9;

    h1{
        text-align: center;
        color: purple;
        font-size: 40px;
        margin-bottom: 100px;
    }
`

const PartnersImage = styled.div`
    width: 60%;
    height: 120px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;

    img{
        width: auto;
    }

    @media (max-width: 800px) {
        flex-wrap: wrap;
}

`