# Clarity publish

A Github Action that publishes artifacts to Clarity

## Usage

Add a step to the end of an existing workflow to publish your built artifacts to clarity.

```yaml
name: CI
on:
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: clarity-st/setup@v1
      - uses: clarity-st/publish@v1
        with:
          api-token: ${{ secrets.CLARITY_API_TOKEN }}
          service: <service_slug>
          path: <artifact_location>
```

## Inputs

| Name         | Requirement  | Description                                                                       |
| ------------ | ------------ | ----------------------------------------------------------------------------------|
| `api-token`  | **required** | A Clarity API Token. Generate under your `Organization Settings`                  |
| `service`    | **required** | The service slug for your target service.                                         |
| `path`       | **required** | The relative path from your GitHub repo root to the artifact you wish to publish. |
