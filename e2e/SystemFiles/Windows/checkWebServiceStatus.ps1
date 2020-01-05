$EndPoint = "http://vlmazapexuiap02.fisdev.local"

$HTTP_Request = [System.Net.WebRequest]::Create($EndPoint)

try {
    $HTTP_Response = $HTTP_Request.GetResponse()
 
    $HTTP_Status = [int]$HTTP_Response.StatusCode

    If ($HTTP_Status -eq 200  ) {
        Write-Host "Site is OK!"
    }
    Else {
        Write-Host "The Site may be down, please check!"
    }   
}
catch {
    Write-Host "The Site may be down, please check!"
    
}
finally {
    $HTTP_Response.Close()    
}

