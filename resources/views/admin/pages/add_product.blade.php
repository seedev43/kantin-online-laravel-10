@extends('admin.layouts.main')

@section('title', 'Add Product')

@section('content')

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0 font-size-18">Add Product</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li class="breadcrumb-item active">Add Product</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <!-- start row -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-3">
                                    <button class="btn btn-primary" onclick="window.location.href='{{ route('index') }}'"><i
                                            class="mdi mdi-arrow-left"> Back</i></button>
                                </div>
                                <form method="post" action="{{ route('product.store') }}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="form-group mb-2">
                                        <label for="image">Product Image</label>
                                        <input class="form-control @error('image') is-invalid @enderror" type="file"
                                            id="image" name="image">
                                        @error('image')
                                            <div class="invalid-feedback mb-3">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="name">Product Name</label>
                                        <input type="text" name="name" id="name"
                                            class="form-control @error('name') is-invalid @enderror" placeholder=""
                                            value="{{ old('name') }}">
                                        @error('name')
                                            <div class="invalid-feedback mb-3">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="description">Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10"
                                            class="form-control @error('description') is-invalid @enderror">{{ old('description') }}</textarea>
                                        @error('description')
                                            <div class="invalid-feedback mb-3">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="price">Product Price</label>
                                        <input type="number" name="price" id="price"
                                            class="form-control @error('price') is-invalid @enderror" placeholder="15000"
                                            value="{{ old('price') }}">
                                        @error('price')
                                            <div class="invalid-feedback mb-3">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="stock">Product Stock</label>
                                        <input type="number" name="stock" id="stock"
                                            class="form-control @error('stock') is-invalid @enderror" placeholder="99"
                                            value="{{ old('stock') }}">
                                        @error('stock')
                                            <div class="invalid-feedback mb-3">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>

                                    <div class="mt-3 mb-4">
                                        <button type="submit" class="btn btn-primary waves-effect waves-light">Submit
                                            Data</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->

            @endsection
