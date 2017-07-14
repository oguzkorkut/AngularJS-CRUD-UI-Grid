package com.okorkut.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.okorkut.rest.DTO.KullaniciDTO;

public class UserServiceImpl implements IUserService {

	@Autowired
	public ServerStorageService serverStorageService;

	@Override
	public int kaydet(KullaniciDTO kullaniciDTO) {
		int id = serverStorageService.kaydet(kullaniciDTO);

		System.out.println("Kaydeilen Kullanici id:" + id);

		return id;
	}

	@Override
	public boolean sil(int id) {
		boolean control = serverStorageService.sil(id);

		System.out.println("Silenen kullanici id:" + id);

		return control;
	}

	@Override
	public KullaniciDTO guncelle(KullaniciDTO kullaniciDTO) {

		KullaniciDTO dto = serverStorageService.guncelle(kullaniciDTO);

		System.out.println("Guncellenen Kullanici Bilgileri:" + kullaniciDTO.toString());
		return dto;
	}

	@Override
	public KullaniciDTO getKullaniciById(int id) {

		KullaniciDTO dto = serverStorageService.getKullaniciById(id);

		System.out.println("Sorgulanan Kullanici Bilgileri:" + dto.toString());
		return dto;
	}

	@Override
	public List<KullaniciDTO> getKullanicilar() {

		List<KullaniciDTO> dtos = serverStorageService.getKullanicilar();

		System.out.println("Sorgulanan kullanici sayisi:" + dtos.size());
		return dtos;
	}

}
