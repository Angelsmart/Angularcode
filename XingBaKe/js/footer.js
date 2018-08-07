app.controller('footerCtrl',['$scope',function($scope){
    $scope.name='qqq'
    $scope.ions=[
        {class:'ion1'},
        {class:'ion2'},
        {class:'ion3'},
        {class:'ion4'},
        {class:'ion5'}
    ];
    $scope.footer=[
        {title:'About Us',
            txts:[
            {txt1:'Our Company'},
            {txt2:'Investor Relations'},
            {txt3:'Newsroom'}
            ]},
        {title:'Career Center',txts:[
            {txt1:'Working at Starbucks'},
            {txt2:'College Plan'},
            {txt3:'Current Partners'},
            {txt4:'Corporate Careers'},
            {txt5:'Manufacturing and Distribution'},
            {txt6:'Retail Careers'},
            {txt7:'International Careers'}
        ]},
        {title:'For Business',txts:[
            {txt1:'Office Coffee'},
            {txt2:'Starbucks Coffee International'},
            {txt3:'Foodservice'},
            {txt4:'Licensed Stores'},
            {txt5:'Starbucks Card Corporate Sales'},
            {txt6:'Landlord Support Center'},
            {txt7:'Suppliers'}
        ]},
        {title:'Online Community',txts:[
            {txt1:'Twitter'},
            {txt2:'Facebook'},
            {txt3:'Instagram'},
            {txt4:'LinkedIn'},
            {txt5:'Pinterest'},
            {txt6:'YouTube'},
            {txt7:'My Starbucks Idea'}
        ]},
        {title:'Quick Links',txts:[
            {txt1:'My Account'},
            {txt2:'Store Locator'},
            {txt3:'Nutrition Info'},
            {txt4:'Customer Service'}
        ]}
    ];
    $scope.boxs=[
        {txt:'Web Accessibility'},
        {txt:'Privacy Policy'},
        {txt:'Terms of Use'},
        {txt:'Contact Us'},
        {txt:'Partners'},
        {txt:'Site Map'}
    ]
}])