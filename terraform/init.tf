variable "access_key" {}
variable "secret_key" {}

provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "us-east-1"
}

resource "aws_key_pair" "freshly" {
  key_name   = "freshly"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDKtoh3+IeDavWgUatmgLtrXrdOunMUJwEIhHzwYtygCFtZGFchuFLaAK3qeS5M1FQlmaVZoY62HI6PZ+7so1uwD85alsPCopmUqJj09FTJK/2wESfdcWGD9c9fZqoeEOcV0UkuvUX/GW6CaPQ8DZQ5vPazNm+uId0KTlsu9Qu75KCI0WSCYPOGCUASOrsh4qvySAYHOygYoFf5bywCnBxwS0zU/vUBlNV+tOlIfl1AZ0NQ0DsY4rwSBzcgafsOCMeKeKb03ANogGGi3hb3s4VD2khmou0vYm4QrdS9LME64uCnJt2//Yld0ouIs3gyCsiAAR7e2qcTyuxCgtvXx82h macbookpro@freshlys-MacBook-Pro.local"
}
resource "aws_instance" "example" {
  ami           = "ami-035be7bafff33b6b6"
  instance_type = "t1.micro"
  key_name = "freshly"
  user_data = "${file("user-data.sh")}"
}

# resource "aws_s3_bucket" "selected" {
#   bucket = "bucket.test.com"
#   acl = "private"
# }

output "ip_addy" {
  value = "${aws_instance.example.public_dns}"
}