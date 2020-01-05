if (Test-Connection -ComputerName 10.7.193.65 -Quiet -Count 1) {
    Write-Host "Site is ok"
}
else {
    Write-Host "Site might be down. Unable to reach"
}