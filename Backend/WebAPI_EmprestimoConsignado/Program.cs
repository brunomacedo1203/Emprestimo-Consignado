using Microsoft.EntityFrameworkCore;
using WebAPI_EmprestimoConsignado.DataContext;
using WebAPI_EmprestimoConsignado.Service.ClienteService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IClienteInterface, ClienteService>();

//  Adicionando a configura��o do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTudo",
        policy => policy
            .AllowAnyOrigin()   // Permite qualquer origem
            .AllowAnyMethod()   // Permite qualquer m�todo HTTP (GET, POST, etc.)
            .AllowAnyHeader()); // Permite qualquer cabe�alho
});

// Configura��o do banco de dados
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseOracle(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Aplicando CORS antes do Authorization
app.UseCors("PermitirTudo");

app.UseAuthorization();
app.MapControllers();

app.Run();
