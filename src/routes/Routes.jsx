import EventDetails from '../pages/EventDetails/EventDetails';
import EventList from '../pages/EventList/EventList';
import FilterEvents from '../pages/FilterEvents/FilterEvents';


// define the routes
export const routes = [
    {path:'/',element:<EventList />},
    {path:'/find-events',element:<FilterEvents />},
    {path:'/event/:id',element:<EventDetails />}
];