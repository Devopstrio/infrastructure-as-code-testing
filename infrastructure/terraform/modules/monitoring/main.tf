resource "aws_cloudwatch_log_group" "drift_logs" {
  name              = "/iac-testing/drift-events"
  retention_in_days = 90
}

resource "aws_cloudwatch_metric_alarm" "drift_detected" {
  alarm_name          = "iac-drift-detected"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "1"
  metric_name         = "DriftCount"
  namespace           = "IaCTesting"
  period              = "60"
  statistic           = "Sum"
  threshold           = "0"
  alarm_description   = "Triggered when infrastructure drift is detected."
  alarm_actions       = [var.sns_topic_arn]
}
