// using System;
// using System.Collections.Generic;
// using System.Data;
// using System.Dynamic;
// using System.IO;
// using System.Linq;
// using Domain;
// using Microsoft.Data.Sqlite;
// using Newtonsoft.Json;
// using Persistence.DatabaseControllers;

// namespace Persistence.Migrations
// {
//     public class Seed
//     {
//         public static void SeedNodeData(DataContext context)
//         {
//             string json = File.ReadAllText("D:/Projects/pli40project/Persistence/DatabaseControllers/pli40projectDataNodes.json");
//             var data = JsonConvert.DeserializeObject<List<Node>>(json);
//             var nodes = new List<Node>();

//             Database mydb = new Database();
//             string nodeQuery = "SELECT * FROM Nodes;";
//             SqliteCommand nodeTable = new SqliteCommand(nodeQuery, mydb.connection);
//             mydb.OpenConnection();
//             SqliteDataReader result = nodeTable.ExecuteReader();

//             if (!result.HasRows)
//             {
//                 for (int i = 0; i < data.Count; i++)
//                 {
//                     var tempNode = new Node
//                     {
//                         Name = data[i].Name,
//                         CentralNode = data[i].CentralNode
//                     };
//                     Console.WriteLine(data[i].Name);
//                     nodes.Add(tempNode);
//                 }
//                 context.Nodes.AddRange(nodes);
//                 context.SaveChanges();
//             }
//             mydb.CloseConnection();
//         }

//         public static void SeedTransportData(DataContext context)
//         {
//             string json = File.ReadAllText("D:/Projects/pli40project/Persistence/DatabaseControllers/pli40projectDataTransports.json");
//             var data = JsonConvert.DeserializeObject<List<Transport>>(json);
//             var transports = new List<Transport>();

//             Database mydb = new Database();
//             mydb.OpenConnection();
//             string transportQuery = "SELECT * FROM Transports;";
//             SqliteCommand transportTable = new SqliteCommand(transportQuery, mydb.connection);

//             SqliteDataReader result = transportTable.ExecuteReader();

//             if (!result.HasRows)
//             {
//                 for (int i = 0; i < data.Count; i++)
//                 {
//                     var tempTransport = new Transport
//                     {
//                         VehicleType = data[i].VehicleType
//                     };
//                     transports.Add(tempTransport);
//                 }
//             }
//             context.Transports.AddRange(transports);
//             context.SaveChanges();
//         }

//         public static string selectNodeQuery(string name)
//         {
//             return "SELECT Id FROM Nodes Where Name = '" + name + "';";
//         }

//         public static void SeedRouteData(DataContext context)
//         {
//             string startNodeQuery = null;
//             string endNodeQuery = null;
//             string json = File.ReadAllText("D:/Projects/pli40project/Persistence/DatabaseControllers/pli40projectDataRoutes.json");
//             var data = JsonConvert.DeserializeObject<List<Route>>(json);
//             var routes = new List<Route>();

//             //Δημιουργώ αντικείμενο Database για να ανοίξω σύνδεση με τη βάση μου. 
//             Database mydb = new Database();
//             mydb.OpenConnection();

//             Console.WriteLine("-----------------------------------------");

//             for (int i = 0; i < data.Count; i++)
//             {
//                 startNodeQuery = selectNodeQuery(data[i].StartNode.Name);
//                 endNodeQuery = selectNodeQuery(data[i].EndNode.Name);
//                 //Δημιουργώ ερώτημα για να ελέγξω την ύπαρξη κόμβου με το όνομα που δίνεται.
//                 SqliteCommand startNodeTableCommand = new SqliteCommand(startNodeQuery, mydb.connection);
//                 SqliteCommand endNodeTableCommand = new SqliteCommand(endNodeQuery, mydb.connection);
//                 Console.WriteLine("-----------------------------------------");
//                 var startNodeResult = startNodeTableCommand.ExecuteReader(); //αποτέλεσμα (κόμβοι)
//                 SqliteDataReader endNodeResult = endNodeTableCommand.ExecuteReader(); //αποτέλεσμα (κόμβοι)

//                 Console.WriteLine("-----------------------------------------");
//                 Console.WriteLine(startNodeResult);

//                 Console.WriteLine(endNodeResult["Id"] + "   " + endNodeResult["Name"]);
//                 Console.WriteLine("-----------------------------------------");
//                 // if(startNodeResult.HasRows){
//                 //     int startNodeTemp = startNodeResult["Id"];
//                 // }
//                 // var tempRoute = new Route
//                 // {
//                 //     StartNode = data[i].StartNode,
//                 //     EndNode = data[i].EndNode,
//                 //     Transport = data[i].Transport,
//                 //     Duration = data[i].Duration,
//                 //     VanguardTime = data[i].VanguardTime,
//                 //     Cost = data[i].Cost
//                 // };
//                 // routes.Add(tempRoute);
//             }


//             context.Routes.AddRange(routes);
//             context.SaveChanges();
//             mydb.CloseConnection();
//         }

//         public static void SeedData(DataContext context)
//         {
//             // SeedTransportData(context);
//             // SeedNodeData(context);
//             SeedRouteData(context);
//         }
//     }
// }