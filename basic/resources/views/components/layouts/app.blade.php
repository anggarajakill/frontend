



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BELAJAR LIVEWIRE</title>
    @livewireStyles
</head>
<body style="background-color:grey">

 <center style="margin-top:200px;">

       @livewire('kotak1')
       {{$slot}}
       @livewire('kotak2')

</center>
    
    @livewireScripts

</body>
</html>