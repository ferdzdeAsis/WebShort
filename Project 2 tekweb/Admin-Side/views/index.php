<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="static/images/logo.jpg" type="image/jpg">
    <title>View Trips | Logitech Express</title>
</head>

<body style="background-image:url(images/login-bg.jpg); background-size: cover">
    <div class="navbar">
        <a class="option" href="viewTrips.php">View Trips</a>
        <a class="option" href="viewPendingTrips.php">View Pending Trips</a>
        <a class="option" href="viewBookTrips.php">View Booked Trips</a>
        <a class="logout" href="index.php">Logout</a>
    </div>
    <h1 class = "viewTrips">TRIPS AVAILABLE</h1>
    <hr/>
    <br>
    <div>
        <input type="search" placeholder="Search" id="searchBus" onkeyup="searchFunction()">            
    </div>
    <div class="fixedTable">
    <table class="view-trips">
        <thead>
            <th>Trip ID</th>
            <th>Bus Liner</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Seats Available</th>
            <th>Date of Departure</th>
            <th>Fare</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody class id = "busTable">
        <% trips.forEach(function(value) { %>
            <% var t = value.trip_id %>
            <tr>
                <td><a href="#"><%= t %></a></td>
                <td><a href="#"><%= value.bus_line %></a></td>
                <td><a href="#"><%= value.origin %></a></td>
                <td><a href="#"><%= value.destination %></a></td>
                <td><a href="#"><%= value.seats_available %>/50</a></td>
                <% var c = (value.date).split(/[- :]/) %>
                <td><a href="#"><%= c[1] %>/<%= c[2] %>/<%= c[0] %> <%= c[3] %>:<%= c[4] %></a></td>
                <td><a href="#">₱<%= value.fare %></a></td>
                <td class = "<%= t %>">
                    <form action="/viewDetails" method="POST">
                        <input type="text" name="id" value="<%= t %>" style="display: none;">
                        <button type="submit" class = "detailsButton">View Details</a>
                    </form>   
                </td>
            </tr>
        <% }) %>
        </tbody>
    </table>
</div>
    
<script>
        function searchFunction() {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value;
            tbody = document.getElementById("myUL");
            td = tbody.getElementsByTagName("td");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.indexOf(filter) > -1) {
                    td[i].style.display = "";
                } else {
                    td[i].style.display = "none";
                }
            }
        }
</script>
</body>
</html>