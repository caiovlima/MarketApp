FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY Market.API.Application/Market.API.Application.csproj Market.API.Application/
COPY Market.API.Domain.Core/Market.API.Domain.Core.csproj Market.API.Domain.Core/
COPY Market.API.Data/Market.API.Data.csproj Market.API.Data/
COPY Market.API.Domain/Market.API.Domain.csproj Market.API.Domain/
RUN dotnet restore Market.API.Application/Market.API.Application.csproj
COPY . .
WORKDIR /src/Market.API.Application
RUN dotnet build Market.API.Application.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Market.API.Application.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Market.API.Application.dll"]
