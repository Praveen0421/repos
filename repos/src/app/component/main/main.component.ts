import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
      description: 'Advanced cloud based & server based enterprise management system for the food and beverage service industry.'

    },
    {
      id: 2,
      mainImage: '../../../assets/image/Repos-Mockup2.png',
      image: '../../../assets/image/Re-Pos-Logo-in-Blue-With-tagline.png',
      description: 'Paperless and Hassle-free Management of Restaurant tables and order relay to kitchen which improves the efficiency of operations while also reducing manual errors.'

    },
    {
      id: 3,
      mainImage: '../../../assets/image/Repos-Mockup1-1.png',
      image: '../../../assets/image/Folder-1.png',
      description: 'May it be a single outlet or a chain of restaurants, always know the latest happenings at all outlets from anywhere,at any time; with our reporting mobile app, ReAnalyse.'

    }
  ]
  user: FormGroup;
  constructor(private activatedRoute: ActivatedRoute) {
    this.user = new FormGroup<any>({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      retail: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      outlet: new FormControl('', Validators.required),
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }


  ngOnInit(): void {

  }
  selected(id: number) {
    this.currentId = Number(id);
  }

  onubmit() {
    this.submitted = true;

    if (this.user.invalid) {
      return;
    }

  }


}
