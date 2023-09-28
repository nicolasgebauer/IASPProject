import django
import os
from django.utils import timezone

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'HopeSolutions.settings')
django.setup()

from faker import Faker
from Core.models import Product, Warehouse, Inventory, Integration, Client, Sale
fake = Faker()

class ProductFactory:
    @staticmethod
    def create_batch(size=1):
        products = []
        for _ in range(size):
            product = Product(
                parentSKU=fake.unique.ean13(),
                SKU=fake.unique.ean13(),
                barCode=fake.ean8(),
                name=fake.unique.first_name(),
                category=fake.bs(),
                price=fake.pydecimal(left_digits=3, right_digits=2, positive=True),
                cost=fake.pydecimal(left_digits=3, right_digits=2, positive=True),
                size=fake.random_element(elements=('S', 'M', 'L', 'XL')),
                category2=fake.bs(),
                gender=fake.random_element(elements=('Male', 'Female', 'Other')),
                creationDate=timezone.make_aware(fake.date_time_this_year()),
            )
            products.append(product)
        Product.objects.bulk_create(products)

class WarehouseFactory:
    @staticmethod
    def create_batch(size=1):
        warehouses = []
        for _ in range(size):
            warehouse = Warehouse(
                name=fake.unique.first_name(),
                type=fake.random_int(min=1, max=5),
                integration_id=fake.random_int(min=1, max=100),
                sync=fake.random_int(min=1, max=100),
                removed=fake.random_int(min=0, max=1),
            )
            warehouses.append(warehouse)
        Warehouse.objects.bulk_create(warehouses)

class InventoryFactory:
    @staticmethod
    def create_batch(size=1, products=None, warehouses=None):
        inventories = []
        for _ in range(size):
            inventory = Inventory(
                product=fake.random_element(elements=products),
                warehouse=fake.random_element(elements=warehouses),
                stock=fake.random_int(min=1, max=100),
            )
            inventories.append(inventory)
        Inventory.objects.bulk_create(inventories)

class IntegrationFactory:
    @staticmethod
    def create_batch(size=1):
        integrations = []
        for _ in range(size):
            integration = Integration(
                name=fake.unique.company(),
                type=fake.random_int(min=1, max=5),
                url=fake.url(),
                token=fake.sha256(),
            )
            integrations.append(integration)
        Integration.objects.bulk_create(integrations)

class ClientFactory:
    @staticmethod
    def create_batch(size=1):
        clients = []
        for _ in range(size):
            client = Client(
                name=fake.first_name(),
                lastName=fake.last_name(),
                rut=fake.unique.ssn(),
                email=fake.unique.email(),
                phone=fake.phone_number(),
                address=fake.address(),
                city=fake.city(),
                country=fake.country(),
                creationDate=timezone.make_aware(fake.date_time_this_year()),
            )
            clients.append(client)
        Client.objects.bulk_create(clients)

class SaleFactory:
    @staticmethod
    def create_batch(size=1, clients=None, products=None, integrations=None):
        sales = []
        for _ in range(size):
            sale = Sale(
                client=fake.random_element(elements=clients),
                product=fake.random_element(elements=products),
                integration=fake.random_element(elements=integrations),
                creationDate=timezone.make_aware(fake.date_time_this_year()),
            )
            sales.append(sale)
        Sale.objects.bulk_create(sales)

ProductFactory.create_batch(10)
WarehouseFactory.create_batch(5)
InventoryFactory.create_batch(10, Product.objects.all(), Warehouse.objects.all())
IntegrationFactory.create_batch(5)
ClientFactory.create_batch(10)
SaleFactory.create_batch(10, Client.objects.all(), Product.objects.all(), Integration.objects.all())
