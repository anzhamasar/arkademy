var myBiodata = ()  => {
    var data = {

        
        nama : "Anzha",
        age : "23",
        addres : [
            { Kota :"Batam",
              alamat: "Baloi harapan 2 blok b Rumdis",
            }
        ],
        hobbies: ['travelling', 'gaming', 'hiking', 'music'],
        is_married: false,
        
        list_school : [
            {
                name : 'SMA negeri 8 Batam',
                year_in : 2012,
                year_out : 2015,
                major : 'Teknik Gambar Bangunan'
            },
            
            {
                name : 'SMP Negeri 30 Batam',
                year_in : 2009,
                year_out : 2012,
                major : null
            },
        ],
        Skills : [
            
            {
                skill_name : 'English',
                level : 'Medium'
            },
            
            {
                skill_name : 'Adobe Photoshop',
                level : 'Amateur'
            },
            
            {
                skill_name : 'HTML',
                level : 'Amateur'
            },
            
            {
                skill_name : 'Javascript',
                level : 'Amateur'
            },
            
            {
                skill_name : 'CSS',
                level : 'Amateur'
            },
            
            {
                skill_name : 'C++',
                level : 'Amateur'
            },
            
            
            
        ],
        "interest_in_coding" : true
        
    }
    result = JSON.stringify(data);
    return result;
};
console.log(myBiodata());