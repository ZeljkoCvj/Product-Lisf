import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Subject, catchError, map, throwError } from "rxjs";
import { Product } from "../models/product";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ProductListService {
  private selectedProduct!: any;
  private productArray!: Array<Product>;
  public aviliablrProdcutChange = new Subject<Product[]>();
  public change = new Subject<boolean>();
  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  async getProducts(): Promise<Product[]> {
    try {
      const snapshot = await this.firestore
        .collection("Product-List")
        .get()
        .toPromise();
      if (snapshot) {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data() as any;
          return {
            id: doc.id,
            ...data,
          };
        });
        this.productArray = products;
        this.aviliablrProdcutChange.next([...this.getProductArray()]);
        return products;
      }
    } catch (error) {
      this.snackBar.open("Došlo je do greške", "Undo", {
        duration: 3000,
      });
      throw error;
    }
    return [];
  }

  selectSameProduct(id: number) {
    this.selectedProduct = this.productArray.find((prodcut) => {
      return prodcut.id === id;
    });
    this.change.next(true);
  }

  sendNewProductInDb(newData: any) {
    const productData = newData.value;

    this.firestore

      .collection("Product-List")
      .add(productData)
      .then((response) => console.log(response))
      .catch((error) =>
        this.snackBar.open("Doslo je do greske", error, {
          duration: 3000,
        })
      );
  }

  deleteOneProduct(id: any) {
    this.firestore
      .collection("Product-List")
      .doc(id)
      .delete()
      .then(() => {
        this.snackBar.open("Produkt je uspeno izbrisan", "Undo", {
          duration: 1500,
        });
      })
      .catch((error) =>
        this.snackBar.open("Doslo je do greske", error, {
          duration: 3000,
        })
      );
  }

  async changeProduct(id: string, newData: FormControl): Promise<void> {
    try {
      const newDataValue = newData.value;
      const docRef = this.firestore.collection("Product-List").doc(id);
      await docRef.set(newDataValue);
    } catch (error) {
      throw error;
    }
  }

  getSelectedProduct(): any {
    return { ...this.selectedProduct };
  }

  getProductArray(): Product[] {
    return [...this.productArray];
  }
}
