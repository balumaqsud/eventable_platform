export const headerLinks = [
    {
        label : 'Home',
        route: '/'
    },
     {
        label : 'Create Event',
        route: '/events/create'
    },
     {
        label : 'My Profile',
        route: '/profile'
    }

]

export const EventDefaultValues = {
    title: '',
    description: '', 
    location: '', 
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    catagoryId: '',
    price: '', 
    isFree: false,
    url: '',
}