resource "aws_eks_cluster" "testing_runtime" {
  name     = "iac-testing-runtime"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = var.private_subnets
  }
}

resource "aws_eks_node_group" "worker_nodes" {
  cluster_name    = aws_eks_cluster.testing_runtime.name
  node_group_name = "iac-testing-nodes"
  node_role_arn   = aws_iam_role.node_role.arn
  subnets         = var.private_subnets

  scaling_config {
    desired_size = 2
    max_size     = 10
    min_size     = 2
  }
}
