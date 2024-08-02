import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title='Пиццы' items={[{
                id: 1,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 2,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },{
                id: 3,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 4,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 5,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 6,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              }    
              ]} categoryId={1} />

              <ProductsGroupList title='Комбо' items={[{
                id: 1,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 2,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },{
                id: 3,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 4,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 5,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              },
              {
                id: 6,
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 550,
                items: [
                  {price: 550}
                ]
              }    
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
