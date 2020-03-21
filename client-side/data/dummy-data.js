import User from '../models/user';
import Route from '../models/route';
import Trip from '../models/trip';
import Search from '../models/search';

export const USER = [
    new User(1, 'mail1', '123456', 'name1', 'surname1', '../assets/user-img.png'),
    new User(2, 'mail2', '123456', 'name2', 'surname2', '../assets/user-img.png'),
    new User(3, 'mail3', '123456', 'name3', 'surname3', '../assets/user-img.png'),
    new User(4, 'mail4', '123456', 'name4', 'surname4', '../assets/user-img.png'),
    new User(5, 'mail5', '123456', 'name5', 'surname5', '../assets/user-img.png')
];

export const ROUTE = [
    new Route (1, 'point1', 'point2', 'KTEL', 180, 25, 5),
    new Route (2, 'point1', 'point3', 'KTEL', 120, 15, 0),
    new Route (3, 'point1', 'point4', 'KTEL', 300, 35, 0),
    new Route (4, 'point2', 'point1', 'KTEL', 180, 25, 0),
    new Route (5, 'point2', 'point3', 'KTEL', 30, 10, 0),
    new Route (6, 'point2', 'point5', 'FERRY', 420, 30, 0),
    new Route (7, 'point3', 'point2', 'KTEL', 30, 10, 0),
    new Route (8, 'point3', 'point1', 'KTEL', 120, 15, 0),
    new Route (9, 'point3', 'point4', 'AIRPLANE', 80, 80, 0),
    new Route (10, 'point4', 'point3', 'AIRPLANE', 80, 80, 0),
    new Route (11, 'point4', 'point1', 'KTEL', 300, 35, 0),
    new Route (12, 'point4', 'point6', 'TRAIN', 150, 15, 0),
    new Route (13, 'point5', 'point2', 'FERRY', 420, 30, 0),
    new Route (14, 'point6', 'point4', 'TRAIN', 150, 15, 0)
];

export const TRIP = [
    new Trip (1, 'Trip 1', '01/01/20', true),
    new Trip (2, 'Trip 2', '02/01/20', true),
    new Trip (3, 'Trip 3', '03/01/20', true),
    new Trip (4, 'Trip 4', '04/01/20', true),
    new Trip (5, 'Trip 5', '05/01/20', true),
    new Trip (6, 'Trip 6', '06/01/20', false),
    new Trip (7, 'Trip 7', '07/01/20', false),
    new Trip (8, 'Trip 8', '08/01/20', false)
    
];

export const SEARCH = [
    new Search (1, 'Search 1', '01/01/20', true),
    new Search (2, 'Search 2', '02/01/20', true),
    new Search (3, 'Search 3', '03/01/20', true),
    new Search (4, 'Search 4', '04/01/20', true)
];