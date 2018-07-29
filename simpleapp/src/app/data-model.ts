export class User {
  fname:string='';
  lname:string='';
  email:string='';
  address:Address;
}

export class Address {
  street:string='';
  city:string='';
  state:string='';
}

export const users:User[]=[

    {fname:'thomas',lname:'aquinas',email:'tquinas@example.com',address:{street:'26 Main St',city:'Quincy',state:'MA'}},
    {fname:'john',lname:'vianney',email:'jvianney@example.com',address:{street:'61 D st',city:'Washington, DC',state:'DC'}},
    {fname:'ann',lname:'seton',email:'aseton@example.com',address:{street:'77 seton ave',city:'emittsburg',state:'MD'}}
  
];

export const states=["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"];
