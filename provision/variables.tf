variable "prefix" {
  default = "naomi"
  description = "The Prefix used for all resources in this example"
}

variable "location" {
  default = "East US 2"
  description = "The Azure Region in which the resources in this example should exist"
}


output "instance_ip_addr" {
  value = "${azurerm_public_ip.example.ip_address}"
}