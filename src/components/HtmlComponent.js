// import React from 'react';
// import { View, Text } from 'react-native';


export const HtmlComponent = `
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
</head>
<body>
  <h1>Invoice</h1>
  <table>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Business Name</th>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>123 Main St</td>
      <td>555-1234</td>
      <td>ABC Company</td>
    </tr>
    <tr>
    <td></td>
      <td>456 Elm St</td>
      <td>555-5678</td>
      <td>XYZ Corporation</td>
    </tr>
    <!-- Repeat the rows as needed -->
    <!-- Add more rows with data here -->
  </table>
</body>
</html>
`;

