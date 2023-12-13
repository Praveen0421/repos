import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
 
  }
  defaultCountry = {img:'https://flagcdn.com/in.svg', name:'India'}
  countryOptionDisplay: boolean = false
  roleOptionDiaplay: boolean = false;
  retailOptionDiaplay: boolean = false;
  currentId: Number = 1;
  submitted: boolean = false;
  retailOption: Array<any> = ['Garments & Appreal', 'Footwear', 'Bonteque', 'Supermarkets', 'Grocery Store', 'Gourmet Store', 'Vegitables Shop', 'Roastery', 'Meat Shop', 'Gift', 'Others'];
  roleOption: Array<any> = ['CXO', 'Founder/Director', 'Manager', 'Consultant', 'Other'];
  countryOption = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

  product: Array<any> = [
    {
      id: 1,
      mainImage: '../../../assets/image/Repos-Mockup.png',
      image: '../../../assets/image/Re-Pos-Logo-in-Blue-With-tagline.png',
      description: 'Advanced cloud based & server based enterprise management system for the food and beverage service industry.',
      width:110

    },
    {
      id: 2,
      mainImage: '../../../assets/image/Repos-Mockup2.png',
      image: '../../../assets/image/Re-Pos-Logo-in-Blue-With-tagline.png',
      description: 'Paperless and Hassle-free Management of Restaurant tables and order relay to kitchen which improves the efficiency of operations while also reducing manual errors.',
      width:90

    },
    {
      id: 3,
      mainImage: '../../../assets/image/Repos-Mockup1-1.png',
      image: '../../../assets/image/Folder-1.png',
      description: 'May it be a single outlet or a chain of restaurants, always know the latest happenings at all outlets from anywhere,at any time; with our reporting mobile app, ReAnalyse.',
      width:90

    }
  ]

  user: FormGroup;
 
  countryData?: any = [];

  ngOnInit(): void {

    //fetiching data for country control in form
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      this.countryData = res
      let i = res.find((e)=>{
        e.name.common == 'India'
    })
  })
    //creating reactive form
    this.user = new FormGroup<any>({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      country: new FormControl('India', Validators.required),
      contact: new FormControl('+91', [Validators.required, Validators.min(10000000000), Validators.max(999999999999)]),
      state: new FormControl('Gujarat', Validators.required),
      city: new FormControl('Ahemdabad', Validators.required),
      brand: new FormControl('', Validators.required),
      retail: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      outlet: new FormControl('', Validators.required),
    })


// apply fragment
    this.activatedRoute.fragment.subscribe((route) => {
      this.Scroll(route)
    })
  }


  ngDoCheck(){

    // setting value of coutry on change of value of country
    this.user.get('country').valueChanges.subscribe((value)=>{
  
      this.countryData.forEach((e)=>{
       
          if(e.name.common.toLowerCase().indexOf(value.toLowerCase()) >
        - 1){
          this.defaultCountry.img = e.flags.svg
        }
      })
      
    });
  

    // setting value of contact on change of value
    this.user.get('contact').valueChanges.subscribe((value)=>{
      console.log(value);
      if(value == '' || value[0] != '+'){
        this.user.patchValue({
          contact:'+91'
        })
      }
    })
  }

  //getter fun for control
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  selected(id: number) {
    this.currentId = Number(id);
  }

  // on submission form fucn
  onubmit() {
    this.submitted = true;

    if (this.user.invalid) {
      return;
    }else{

      
    }

  }

// jump to particular section of pae func
  Scroll(value: string) {
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
     this.route.navigate(['Main'])
  }

// seeting value of all select func
  setSelectOptionValue(r:any, control: string) {
 

    // let retailValue = this.retailOption
    if (r == '') {
      if (control == 'retail') {
        this.retailOptionDiaplay = !this.retailOptionDiaplay;
        this.roleOptionDiaplay = false;
        this.countryOptionDisplay = false

      } else if (control == 'role') {
        this.roleOptionDiaplay = !this.roleOptionDiaplay;
        this.retailOptionDiaplay = false
        this.countryOptionDisplay = false
      } else if (control == 'country') {
        this.countryOptionDisplay = !this.countryOptionDisplay
        this.retailOptionDiaplay = false
        this.roleOptionDiaplay = false;
      }

    } else {
      if (control === 'retail') {
        this.user.patchValue({
          retail: r,
        })
        this.retailOptionDiaplay = false
      } else if (control === 'role') {
      

        this.user.patchValue({
          role: r,
        })
        this.roleOptionDiaplay = false
      } else if (control === 'country') {
        this.defaultCountry.img = r.flags.svg
       
        this.user.patchValue({
          country: r.name?.common
        })
        this.countryOptionDisplay = false
      }

    }
  }



}
