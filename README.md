# Data-Cleaning-and-Preprocessing
Clean and prepare a raw dataset


---

##  **Data Cleaning and Preprocessing Steps (with Descriptions)**

---

### 1. **Import Required Libraries**

* Load essential libraries like `pandas` and `numpy` to work with data.

---

### 2. **Load the Dataset**

* Use `pd.read_csv()` to load data from a CSV file into a DataFrame.

---

### 3. **Understand the Dataset**

* Use `.info()` to check data types and null values.
* Use `.describe()` to get basic statistics of numerical columns.
* Use `.isnull().sum()` to count missing values in each column.

---

### 4. **Handle Missing Values**

* Fill missing values using `.fillna()` (e.g., median for income).
* Alternatively, you can drop rows with `.dropna()` if needed.

---

### 5. **Remove Duplicate Rows**

* Use `.drop_duplicates()` to eliminate repeated records.

---

### 6. **Standardize Text Values**

* Convert text to lowercase and remove extra spaces using `.str.lower().str.strip()`.
* Helps in grouping and analyzing consistent categories (e.g., education levels, marital status).

---

### 7. **Convert Date Formats**

* Convert date columns from strings to datetime objects using `pd.to_datetime()`.
* Ensures correct date comparisons and time-based operations.

---

### 8. **Rename Columns**

* Make column names lowercase and replace spaces with underscores.
* Done using `df.columns.str.lower().str.replace(' ', '_')` for consistency and ease of use.

---

### 9. **Check and Fix Data Types**

* Make sure each column has the correct data type (e.g., integers for age, float for income, datetime for dates).
* Use `.astype()` or conversion functions as needed.

---

### 10. **Export the Cleaned Data**

* Save the cleaned DataFrame back to a CSV file using `.to_csv()`.
* Optionally, export to Excel using `.to_excel()`.

---


