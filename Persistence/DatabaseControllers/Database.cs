// using Microsoft.Data.Sqlite;

// namespace Persistence.DatabaseControllers
// {
//     public class Database
//     {
//         public SqliteConnection connection;
//         public Database()
//         {
//             connection = new SqliteConnection("Data source=pli40project.db");
//         }

//         public void OpenConnection()
//         {
//             if(connection.State != System.Data.ConnectionState.Open)
//             {
//                 connection.Open();
//             }
//         }

//         public void CloseConnection()
//         {
//             if(connection.State != System.Data.ConnectionState.Closed)
//             {
//                 connection.Close();
//             }
//         }
//     }
// }