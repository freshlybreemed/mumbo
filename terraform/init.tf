variable "access_key" {}
variable "secret_key" {}
variable "public_key" {}

provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "us-east-1"
}

resource "aws_key_pair" "freshly-key" {
  key_name   = "freshly"
  public_key = "${var.public_key}"
}
resource "aws_instance" "crank" {
  ami           = "ami-035be7bafff33b6b6"
  tags = {
    Name = "CRANK"
  }
  instance_type = "t2.micro"
  key_name = "freshly"
  user_data = "${file("user-data.sh")}"
}


resource "aws_eip" "crank" {
  instance = "${aws_instance.crank.id}"
  vpc      = true
}
output "ip_addy" {
  value = "${aws_eip.crank.public_dns}"
}